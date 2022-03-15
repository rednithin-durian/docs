import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as FederationIcon } from '../assets/federation.svg';
import { IconSchema } from '@apollo/space-kit/icons/IconSchema';
import { ReactComponent as RoverIcon } from '../assets/rover-logo.svg';
import {
  NavItemsContext,
  NavItemDescription
} from 'gatsby-theme-apollo-docs';
import { colors } from '@apollo/space-kit/colors';
import { size } from 'polished';
import { MenuWrapper, MenuItem } from './menu';

function getBoxShadow(opacity, y, blur) {
  return `rgba(18, 21, 26, ${opacity}) 0 ${y}px ${blur}px`
}

const {indigo} = colors;
const AppIcon = styled.div({
  ...size('100%'),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: [
    getBoxShadow(0.12, 1, 2),
    getBoxShadow(0.1, 2, 4),
    getBoxShadow(0.08, 5, 10),
    `inset rgba(45, 31, 102, 0.4) 0 -1px 2px`
  ].toString(),
  borderRadius: 8,
  color: indigo.lighter,
  backgroundImage: `linear-gradient(${[indigo.base, indigo.dark]})`,
  svg: {
    ...size(16),
    fill: 'currentColor'
  }
});

const StyledLink = styled.a({
  color: 'inherit',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
});

const icons = [
  <RoverIcon />,
  <RoverIcon />,
  <RoverIcon />,
  <RoverIcon />,
  <FederationIcon />,
  <IconSchema weight="thin" />,
  <RoverIcon />
];

export default function DocsetMenu() {
  const navItems = useContext(NavItemsContext);
  return (
    <MenuWrapper>
      {navItems
        .filter((navItem) => !navItem.omitLandingPage)
        .map((navItem, index) => (
          <MenuItem
            key={navItem.url}
            icon={(
              <AppIcon>
                {icons[index]}
              </AppIcon>
            )}
            title={(
              <StyledLink href={navItem.url}>
                {navItem.title}
              </StyledLink>
            )}
          >
            <NavItemDescription>{navItem.description}</NavItemDescription>
          </MenuItem>
        ))}
    </MenuWrapper>
  );
}
