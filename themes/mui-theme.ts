import { createMuiTheme } from '@material-ui/core/styles'

 // Add our custom colours to the material UI theme
 // These values need to be replicated in the main scss themes _colours.scss file
  export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1A695D'
      },
      secondary: {
        main: '#0d594e'
      }
    },
    typography: {
        fontSize: 24
    }
  })

  export default theme