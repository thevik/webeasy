# webeasy

#### A react library to make UI making fast.

[![NPM](https://img.shields.io/npm/v/webeasy.svg)](https://www.npmjs.com/package/webeasy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save webeasy
```

## Usage

```jsx
import React, { Component } from 'react'

import { NavbarComponent, 
  HeroComponent,
  HorizontalBoxComponent,
  FooterComponent,
  ImageTextComponent } from 'webeasy'
import 'webeasy/dist/index.css'

class Example extends Component {
  render() {
    return (
      <NavbarComponent />
      <HeroComponent />
      <ImageTextComponent />
      <HorizontalBoxComponent />
      <FooterComponent />
    )
  }
}
```

## NavbarComponent

```jsx
  <NavbarComponent 
    title="Web-Easy"
    navOptionFirst="Profile" 
    navHrefFirst="#"
    navOptionSecond="Services" 
    navHrefSecond="#"
    navOptionThird="AboutUs"
    navHrefThird="#" 
    btnText="Sign In" 
    btnHref="#" />
```

###### title => your company name
###### navOptionFirst => the first option to be showed on the navbar
###### navHrefFirst => where the first option should transfer you if click

```bash
Same with other navOption and navHref showed above
```

###### btnText => navbar does have a button, this prop will hold the text inside the button
###### btnHref => where the button should transfer you if click

## HeroComponent

```jsx
  <HeroComponent 
    tagline="Making UI Made Easy" 
    subtagline="Lmao I dont have any subtagline" 
    firstBtnText="Get Started" 
    secondBtnText="Watch Video"
    firstBoxTitle="Loren Ipsum"
    firstBoxSubTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    secondBoxTitle="Loren Ipsum"
    secondBoxSubTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    thirdBoxTitle="Loren Ipsum"
    thirdBoxSubTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    image = {heroimage} 
    secondBtnHref="#"
    firstBtnHref="#" />
```

###### tagline => the tagline of your company ( example: explore the future etc )
###### subtagline => the subtagline of your company
###### firstBtnText => HeroComponent have two button, this prop will hold the text of first button
###### secondBtnText => This will hold the text of second button
###### firstBtnHref => where the first button should transfer you if click
###### secondBtnHref => where the second button should transfer you if click
###### firstBoxTitle => HeroComponent does also have three boxes, this will hold the title of first box
###### secondBoxTitle => This will hold the title of second box
###### thirdBoxTitle => This will hole the title of third box
###### firstBoxSubTitle => The breif explanation of that title in first box
###### secondBoxSubTitle => The breif explanation of that title in second box
###### thirdBoxSubTitle => The breif explanation of that title in third box

## ImageTextComponent

```jsx 
  <ImageTextComponent
    title="Why Doge Is The Best"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    image={teamimage} />
  ```

This is basically about section of your company /  anything you are building

###### title => The title of your about section ( example: Know more about us / Know who you are trusting etc )
###### subtitle => The actual explanation of your about section
###### image => A image to show in the right side of the subtitle

## HorizontalBoxComponent

```jsx 
  <HorizontalBoxComponent 
    firstBoxImage={heroimage} 
    firstBoxTitle="Doge Is The Best"
    firstBoxContent="I dont have a content but I do wanna write something so there you go I am soo ducking good in programming and I love to read harry potter which I borrowed today duh" 
    secondBoxImage={heroimage} 
    secondBoxTitle="Doge Is The Best"
    secondBoxContent="I dont have a content but I do wanna write something so there you go I am soo ducking good in programming and I love to read harry potter which I borrowed today duh"
    thirdBoxImage={heroimage} 
    thirdBoxTitle="Doge Is The Best"
    thirdBoxContent="I dont have a content but I do wanna write something so there you go I am soo ducking good in programming and I love to read harry potter which I borrowed today duh" />
```

This component will have three bosex horizontally aligned and you can write thing like we share this plan or anything you want

###### firstBoxImage => The image to be showned in the top
###### firstBoxTitle => The title of the first box
###### firstBoxContent => The content of the first box

// do same with second and third box just change the image, title, subtitle if you want

## FooterComponent

```jsx 
  <FooterComponent 
    title="Company Name" 
    subtitle="A little bit description of your company"
    copyright="© Copyright Company Name. All Rights Reserved" />
```

This is footer of the website ( also have a subscribe to newletter thing )

###### title => The name of your company / whatever it is ( example: YouTube )
###### substitle => Again that tagline like thing
###### copywrite => Enter you copy write message ( duh just copy paste the above the copyright thing in <FooterComponent> )

// The Subscribe to email list thing will be added anything, wont be disturbing you

## License

MIT © [thevik](https://github.com/thevik)
