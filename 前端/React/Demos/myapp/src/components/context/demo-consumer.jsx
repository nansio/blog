import { ThemeContext, TimeContext } from './index'

function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <TimeContext.Consumer>
          {({username, now}) => (
            <div className="multi-context-container">
              <button onClick={toggleTheme} 
                style={{backgroundColor: theme.background, color: theme.foreground, fontSize:'21px', borderRadius: '5px'}}>
                改变主题
              </button>
              <div>
                Hello, {username}! <i>The page is loaded at {now.toLocaleDateString()} {now.toLocaleTimeString()}</i>
              </div>
            </div>
          )}
        </TimeContext.Consumer>
      )
      }
    </ThemeContext.Consumer>
  )
}
export default ThemeButton