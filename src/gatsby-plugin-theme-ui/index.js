const theme = {
  colors: {
    text: '#786b1f',
    background: '#fff',
    highlight: '#fffbe0',
  },
  styles: {
    root: {
      color: '#786b1f',
      marginBottom: '10px',
      paddingBottom: '20px',
    },
  },
  messages: {
    tip: {
      color: '#dfac05',
      marginBottom: '0.5rem',
      fontSize: '0.9rem',
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      }
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
}
export default theme
