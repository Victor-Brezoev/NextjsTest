// Styled elements for the Card go here
import styled from "styled-components"

export const CardMain = styled(({...props})=><div{...props}/>)`
display: flex;
  align-items: center;
  background: #f4f4f4;
  text-align: start;
  padding: 10px;
  border-radius: 6px;
  position: relative;
  border: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: ${props => props.theme.main};

    h3 {
      text-decoration: underline;
      color: ${props => props.theme.main};
    }
  }

  &:nth-child(1) {
    max-width: 380px;
    background: ${props => props.theme.grayF0};

    @media (max-width: 1024px) {
      max-width: 360px;
    }
  }

  &:nth-child(2) {
    max-width: 410px;
    background: ${props =>props.theme.grayEA};

    @media (max-width: 1024px) {
      max-width: 420px;
    }
  }

  &:nth-child(3) {
    max-width: 440px;
    background: ${props => props.theme.grayE2};

    @media (max-width: 1024px) {
      max-width: 490px;
    }
  }
`
export const CardInner = styled(({...props}) => <div{...props}/>)``

export const CardLink = styled(({...props}) => <div {...props}/>)`
text-decoration: none;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 5;

a {
  color: transparent;
  display: block;
  width: 100%;
  height: 100%;
}
`
export const CardMedia = styled(({...props}) => <div{...props}/>)`
display: flex;
flex: 0 0 130px;
height: 130px;
align-items: center;
justify-content: center;
margin-right: 6px;
`
export const CardTitle = styled (({...props}) => <h3 {...props}/>)`
font-weight: 700;
font-size: 20px;
font-family: Poppins;
line-height: 28px;
letter-spacing: 0.55px;
margin-block: 0;
transition: color 0.3s ease-in-out;
`
export const CardText= styled(({...props}) => <p{...props}/>)`
font-family: Poppins;
font-weight: 400;
font-size: 0.825rem;
line-height: 1.5;
margin-block: 0;
`
