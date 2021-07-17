import React from 'react'
import styles from './styles.module.css'

export const NavbarComponent = (props) => {
  return <header>
    <p className={styles.title}>{props.title}</p>
    <nav>
      <ul className={styles.nav_links}>
        <li><a href={props.navHrefFirst}>{props.navOptionFirst}</a></li>
        <li><a href={props.navHrefSecond}>{props.navOptionSecond}</a></li>
        <li><a href={props.navHrefThird}>{props.navOptionThird}</a></li>
      </ul>
    </nav>
    <a href={props.btnHref}><button style={{backgroundColor: props.backgroundColor}}>{props.btnText}</button></a>
  </header>
}

export const HeroComponent = (props) => {
  return (
    <div className={styles.hero}>
    <p  className={styles.tagline}><h1>{props.tagline}</h1></p>
    <p className={styles.subtagline}><h4>{props.subtagline}</h4></p>
    <div style={{display: 'flex', flexDirextion: 'row', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <a href={props.firstBtnHref}><button style={{backgroundColor: props.buttoncolor, marginRight: 10}}>{props.firstBtnText}</button></a>
        <a href={props.secondBtnHref}><button style={{backgroundColor: props.buttoncolor}}>{props.secondBtnText}</button></a>
      </div>
      <img src={props.image} className={styles.heroimage}></img>
    </div>
    <div style={{marginTop: -20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{height: 200, width: 345, backgroundColor: 'rgb(235, 232, 232)', paddingLeft: 10}}>
        <h1 style={{fontWeight: 'bold', color: 'rgb(65, 105, 225)'}}>{props.firstBoxTitle}</h1>
        <p style={{fontSize: 18}}>{props.firstBoxSubTitle}</p>
      </div>
      <div style={{height: 200, width: 345, backgroundColor: 'rgb(235, 232, 232)', paddingLeft: 10}}>
        <h1 style={{fontWeight: 'bold', color: 'rgb(65, 105, 225)'}}>{props.secondBoxTitle}</h1>
        <p style={{fontSize: 18}}>{props.secondBoxSubTitle}</p>
      </div>
      <div style={{height: 200, width: 345, backgroundColor: 'rgb(235, 232, 232)', paddingLeft: 10}}>
        <h1 style={{fontWeight: 'bold', color: 'rgb(65, 105, 225)'}}>{props.thirdBoxTitle}</h1>
        <p style={{fontSize: 18}}>{props.thirdBoxSubTitle}</p>
      </div>
    </div>
    </div>
  )
}

export const HorizontalBoxComponent = (props) => {
  return (
    <div className={styles.horizontalboxcomponent}>
      <div className={styles.horizontalbox}>
        <img src={props.firstBoxImage} className={styles.boximage}></img>
        <p className={styles.boxtitle}>{props.firstBoxTitle}</p>
        <p className={styles.boxsubtitle}>{props.firstBoxContent}</p>
      </div>
      <div className={styles.horizontalbox}>
        <img src={props.secondBoxImage} className={styles.boximage}></img>
        <p className={styles.boxtitle}>{props.secondBoxTitle}</p>
        <p className={styles.boxsubtitle}>{props.secondBoxContent}</p>
      </div>
      <div className={styles.horizontalbox}>
        <img src={props.thirdBoxImage} className={styles.boximage}></img>
        <p className={styles.boxtitle}>{props.thirdBoxTitle}</p>
        <p className={styles.boxsubtitle}>{props.thirdBoxContent}</p>
      </div>
    </div>
  )
}

export const FooterComponent  = (props) => {
  return (
    <div className={styles.footercomponent}>
      <h1>{props.title}</h1>
      <p style={{color: '#737372',marginTop: -15}}>{props.subtitle}</p>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <input type="email" placeholder="Enter Your Email" style={{height: 50, alignItems: 'center', display: 'flex', fontSize: 20, fontWeight: 800, paddingLeft: 10}}></input>
        <button style={{height: 61, width: 200, borderRadius: 0, alignItems: 'center', display: 'flex', backgroundColor: "rgb(65, 105, 225)", borderStyle: 'solid', borderWidth: 5, borderColor: '#dedede'}}><p style={{color: '#fff'}}>Subscribe</p></button>
      </div>
      <a>{props.copyright}</a>
    </div>
  )
}

export const ImageTextComponent = (props) => {
  return (
    <div className={styles.imagetextcomponent}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: 575}}>
          <h1>{props.title}</h1>
          <p style={{color: '#737372',marginTop: -15, fontSize: 18}}>{props.subtitle}</p>
        </div>
        <div>
          <img src={props.image} style={{height: 380, width: 475, marginTop: 45, marginLeft: 5}}></img>
        </div>
      </div>
    </div>
  )
}