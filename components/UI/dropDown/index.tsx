import Link from 'next/link';
import React from 'react'
import styles from './index.module.css'
class DropDownUI extends React.Component<any> {
  constructor(props: any) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  wrapperRef:any=null
  state = { dropDownOpen: false };

  toggleDropDown = () =>
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
    closeDropDown = () =>
    this.setState({ dropDownOpen: false });
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event: any) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.closeDropDown()
      console.log('fasdfsdafdsafsadfsadfsdafsad');
      
    }
  }

  render() {



    const { title, dropDownArr, left , flex} = this.props

    /*       const title = 'Click Me';
          const dropDownArr = ['item1', 'item2', 'item3']; */
    return (
      <div
        className={styles.container}
        ref={this.wrapperRef}
      >
        <div className={styles.DropDownMenu} style={flex?{justifyContent:flex}:{}}
          onClick={() => this.toggleDropDown()}
        >
          <div>{title}</div>
        </div>
        <div className={`${styles.SumofItems} ${this.state.dropDownOpen && styles.activeSumItems} ${left && styles.leftSide}`} style={flex?{bottom:'-118px'}:{}}>
          {this.state.dropDownOpen
            ? dropDownArr.map((item: { title: string, link?: string, cb: any }, i: number) => {
              return (
                <div className={styles.DropDownItem} key={i}
                  onClick={item?.cb}>
                  {item.link ? <Link href={item.link} ><a>{item.title}</a></Link> : <span>{item.title}</span>}
                </div>
              );
            })
            : null}
        </div>

      </div>
    );
  }
}

export default DropDownUI