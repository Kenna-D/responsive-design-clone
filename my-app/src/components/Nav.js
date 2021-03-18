import React from 'react';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: 'closed'
    }
  }

  handleClick = () => {
    if(this.state.menu === 'closed'){
      this.setState({ menu: 'open' })
    }else {
      this.setState({ menu: 'closed' })
    }
  }

  render(){
    return(
      <nav>
        <section>
          <button className='button' onClick={this.handleClick}> Menu 
          {/* <img src={'https://img.icons8.com/metro/2x/menu.png'}   ></img> */}
          </button>
          
            <ul className={this.state.menu === 'closed' ? 'closed' : 'open'}>
              <li>  About</li>
              <li>  Projects</li>
              <li>  Contact</li>
            </ul>
    
        </section>
      </nav>
    )
}
}