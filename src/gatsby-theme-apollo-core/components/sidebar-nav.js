import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import styled from '@emotion/styled';
import {IconArrowUp} from '@apollo/space-kit/icons/IconArrowUp';
import {IconCollapseList} from '@apollo/space-kit/icons/IconCollapseList';
import {IconExpandList} from '@apollo/space-kit/icons/IconExpandList';
import {IconOutlink} from '@apollo/space-kit/icons/IconOutlink';
import {Link, withPrefix} from 'gatsby';
import {colors} from '../utils/colors';
import {size} from 'polished';
import {smallCaps} from '../utils/typography';
import { useEffect } from 'react';

const ExpandAll = styled.button(smallCaps, {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 12,
  padding: '4px 0',
  border: 0,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 1,
  background: 'none',
  outline: 'none',
  cursor: 'pointer',
  color: 'inherit',
  ':hover': {
    opacity: colors.hoverOpacity
  },
  svg: {
    ...size(12),
    marginRight: 8
  }
});

const StyledList = styled.ul({
  marginLeft: 0,
  marginBottom: 32,
  listStyle: 'none'
});

const StyledListItem = styled.li({
  display: 'flex',
  fontSize: '1rem',
  lineHeight: 1.5,
  marginBottom: 13,
  a: {
    color: 'inherit',
    textDecoration: 'none',
    // create space around the link and cancel it out
    padding: '4px 10px',
    margin: '-3px -10px',
    borderRadius: 2,
    lineHeight: '1.6rem',
	  ':hover': {
      opacity: colors.hoverOpacity,
      background: '#eee'
    },
    '&.active': {
      color: colors.primary,
      pointerEvents: 'none',
      fontWeight: 600,
      background: '#fff'
    }
  }
});

const Category = styled.div({
  position: 'relative',
  zIndex: 0,
  [StyledList]: {
    position: 'relative',
    zIndex: 2
  }
});

const categoryTitleStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 0',
  color: colors.text1,
  fontWeight: 'bold',
  fontSize: 14,
  lineHeight: '15px',
  ...smallCaps,
  svg: size(10),
  '&.active': {
    color: colors.primary
  }
};

const CategoryTitle = styled.div(categoryTitleStyles);
const CategoryLink = styled(Link)(categoryTitleStyles, {
  textDecoration: 'none',
  ':hover': {
    opacity: colors.hoverOpacity
  }
});

const StyledCheckbox = styled.input({
  ...size('100%'),
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  zIndex: 1,
  [`:hover ~ ${CategoryTitle}`]: {
    opacity: colors.hoverOpacity
  },
  ':not(:checked) ~': {
    [`${CategoryTitle} svg`]: {
      transform: 'scaleY(-1)'
    },
    [StyledList]: {
      display: 'none'
    }
  },
  
});

const StyledOutlinkIcon = styled(IconOutlink)(size(14), {
  verticalAlign: -1,
  marginLeft: 8,
  color: colors.text3
});

function isPageSelected(path, pathname) {
  const [a, b] = [withPrefix(path), pathname].map(string =>
    string.replace(/\/$/, '')
  );
  return a === b;
}

function NavItems(props) {

  return (
    <StyledList>
      {props.pages.map((page, index) => {
        const pageTitle = page.sidebarTitle || page.title;
        return (
          <StyledListItem key={index}>
            {page.anchor ? (
              <a href={page.path} target="_blank" rel="noopener noreferrer">
                {pageTitle}
                <StyledOutlinkIcon />
              </a>
            ) : (
              <Link
                className={
                  isPageSelected(page.path, props.pathname) ? 'active' : null
                }
                to={page.path}
                title={page.description}
                onClick={props.onLinkClick}
              >
                {pageTitle}
              </Link>
            )}
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}

NavItems.propTypes = {
  pages: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func
};

export default function SidebarNav(props) {
  const categoriesRef = useRef();

  const [allExpanded, setAllExpanded] = useState(false);

  const categories = props.contents.filter(content => content.title);
  const [root] = props.contents.filter(content => !content.title);

useEffect(() => {
  console.log(allExpanded, 'allExapnded');
  categories.map((category, index) => {console.log(category, index)})

}, [])

  function toggleAll() {
    const checkboxes = Array.from(
      categoriesRef.current.querySelectorAll('input[type="checkbox"]')
    );

    const expanded = checkboxes.every(checkbox => !checkbox.checked);

    console.log(expanded, 'expanded');

    checkboxes.forEach(checkbox => (checkbox.checked = expanded));
    setAllExpanded(expanded);

    if (props.onToggleAll) {
      props.onToggleAll(expanded);
    }
  }

  function toggleCategory(event) {
    const {value, checked, parentElement} = event.target;

    const checkboxes = parentElement.parentElement.querySelectorAll(
      'input[type="checkbox"]'
    );

    const expanded = Array.from(checkboxes).some(checkbox => checkbox.checked);
    setAllExpanded(expanded);

    if (props.onToggleCategory) {
      props.onToggleCategory(value, checked);
    }
  }

  return (
    <>
      {root && (
        <NavItems
          pages={root.pages}
          pathname={props.pathname}
          onLinkClick={props.onLinkClick}
        />
      )}
      {!props.alwaysExpanded && categories.length > 1 && (
        <ExpandAll onClick={toggleAll}>
          {React.createElement(allExpanded ? IconCollapseList : IconExpandList)}
          {allExpanded ? 'Collapse' : 'Expand'} all
        </ExpandAll>
      )}
      <div ref={categoriesRef}>
        {categories.map((category, index) => {
          const isSelected = category.pages.some(page =>
            isPageSelected(page.path, props.pathname)
          );
          const className = isSelected ? 'active' : null;
          return (
            <>
            {category.title == 'Durian Checkout' ? <h6 class = 'sidebar-category'>Payments</h6> : null}
            <Category key={index}>
              {!props.alwaysExpanded && (
                <StyledCheckbox
                  type="checkbox"
                  value={category.title}
                  onChange={toggleCategory}
                />
              )}
              {props.alwaysExpanded && category.path ? (
                <CategoryLink className={className} to={category.path}>
                  {category.title}
                </CategoryLink>
              ) : (
                <CategoryTitle className={className}>
                  {category.title}
                  {!props.alwaysExpanded && <IconArrowUp />}
                </CategoryTitle>
              )}
              <NavItems
                pages={category.pages}
                pathname={props.pathname}
                onLinkClick={props.onLinkClick}
              />
            </Category>
            </>
          );
        })}
      </div>
    </>
  );
}

SidebarNav.propTypes = {
  alwaysExpanded: PropTypes.bool,
  contents: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  onToggleAll: PropTypes.func,
  onToggleCategory: PropTypes.func,
  onLinkClick: PropTypes.func
};
