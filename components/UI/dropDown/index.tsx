 import Link from 'next/link';
import React from 'react'
 import styles from './index.module.css'
 class DropDownUI extends React.Component<any> {
     
    state = { dropDownOpen: true };
  
    toggleDropDown = () =>
      this.setState({ dropDownOpen: !this.state.dropDownOpen });
  
    render() {

   
      
        const {title, dropDownArr}= this.props
        console.log(dropDownArr,'faskhfdjsdahfjsas');
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
            ? dropDownArr.map((item:{title:string,link?:string, cb:any},i:number) => {
              return (
                <div className={styles.DropDownItem} key={i}
                  onClick={item?.cb}> 
                  <Link href={item?.link?item.link:'#'} ><a>{item.title}</a></Link>
                </div>
              );
            })
            : null}
        </div>
      );
    }
  }
  
  export default DropDownUI