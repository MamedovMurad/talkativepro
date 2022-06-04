 import Link from 'next/link';
import React from 'react'
 import styles from './index.module.css'
 class DropDownUI extends React.Component<any> {
     
    state = { dropDownOpen: false };
  
    toggleDropDown = () =>
      this.setState({ dropDownOpen: !this.state.dropDownOpen });
  
    render() {
        const {title, dropDownArr}= this.props
/*       const title = 'Click Me';
      const dropDownArr = ['item1', 'item2', 'item3']; */
      return (
        <div
          className={styles.container}
          
        >
          <div className={styles.DropDownMenu}
            onClick={() => this.toggleDropDown()}
          >
            <div>{title}</div>
          </div>
          {this.state.dropDownOpen
            ? dropDownArr.map((item:any) => {
              return (
                <div className={styles.DropDownItem} key={item}
                  onClick={() => alert('You Clicked an Item!')}> 
                  <Link href="/dashboard/teacher-settings"><a>{item}</a></Link>
                </div>
              );
            })
            : null}
        </div>
      );
    }
  }
  
  export default DropDownUI