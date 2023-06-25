import { styled } from 'twin.macro'

export const Container = styled.div`
  .envelope {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 200px;
    cursor: pointer;
  }

  .envelope-body {
    position: absolute;
    height: 150px;
    width: 200px;
    transition: 0.5s;
  }

  .envelope-body .body {
    position: absolute;
    bottom: 0;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 0 0 100px 200px;
    border-color: transparent transparent #056f92 transparent;
    z-index: 2;
  }

  .envelope-body .top-fold {
    position: absolute;
    top: 50px;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 50px 100px 0 100px;
    border-color: #02374b transparent transparent transparent;
    transform-origin: 50% 0%;
    transition: transform 0.5s 0.5s, z-index 0.25s 0.5s;
    z-index: 2;
  }

  .envelope-body .back-fold {
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 200px;
    background-color: #02374b;
    z-index: 0;
  }

  .envelope-body .left-fold {
    position: absolute;
    bottom: 0;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 50px 0 50px 100px;
    border-color: transparent transparent transparent #034d66;
    z-index: 2;
  }

  .envelope-body .letter {
    position: absolute;
    left: 20px;
    bottom: 0;
    height: 60px;
    width: 160px;
    background-color: #ffffff;
    transition: 0.5s 0.25s;
    z-index: 1;
    overflow: hidden;
  }

  .envelope-body .letter .letter-body {
    height: 10px;
    width: 100%;
    background: repeating-linear-gradient(
      45deg,
      #0a1f5a,
      #0a1f5a 8px,
      transparent 8px,
      transparent 18px
    );
  }

  .envelope-body .letter .letter-title {
    height: 10px;
    width: 40%;
    background-color: #0a1f5a;
    margin-top: 10px;
    margin-left: 5px;
    opacity: 0.85;
  }

  .envelope-body .letter .letter-context {
    height: 10px;
    width: 20%;
    background-color: #0a1f5a;
    margin-top: 10px;
    margin-left: 5px;
    opacity: 0.85;
  }

  .envelope-body .letter .letter-stamp {
    height: 30px;
    width: 30px;
    background-color: #0a1f5a;
    margin-top: 30px;
    margin-left: 120px;
    border-radius: 50%;
    opacity: 0.5;
  }

  .shadow {
    position: absolute;
    top: 200px;
    left: 50%;
    height: 30px;
    width: 400px;
    transform: translateX(-50%);
    background: radial-gradient(#00000040, transparent, transparent);
    transition: 0.5s;
    border-radius: 50%;
  }

  .envelope:hover .envelope-body {
    transform: translateY(50px);
  }

  .envelope:hover .envelope-body .top-fold {
    transform: rotateX(180deg);
    z-index: 0;
    transition: transform 0.5s, z-index 0.25s;
  }

  .envelope:hover .envelope-body .letter {
    height: 180px;
  }

  .envelope:hover .shadow {
    width: 250px;
  }
`

export const CardContainer = styled.div`
  .card {
    position: relative;
    width: 250px;
    height: 350px;
    cursor: pointer;
    transform-style: preserve-3d;
    transform: perspective(2500px);
    transition: 1s;
  }

  .card.open {
    transform: perspective(2500px) rotate(5deg);
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2),
      0 10px 100px rgba(0, 0, 0, 0.5);
    .cardFront {
      transform: rotateY(-160deg);
    }
    .happy {
      visibility: hidden;
    }
  }

  /* .card:hover {
    transform: perspective(2500px) rotate(5deg);
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2),
      0 10px 100px rgba(0, 0, 0, 0.5);
  }

  .card:hover .cardFront {
    transform: rotateY(-160deg);
  }

  .card:hover .happy {
    visibility: hidden;
  } */

  .cardFront {
    position: relative;
    background-color: #fff;
    width: 250px;
    height: 350px;
    overflow: hidden;
    transform-origin: left;
    border: black solid 3px;
    /* box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2),
      30px 0 50px rgba(0, 0, 0, 0.4); */
    transition: 0.6s;
  }

  .happy {
    font-family: Tahoma, sans-serif;
    text-align: center;
    margin: 30px;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    transition: 0.1s;
  }

  .balloons {
    position: absolute;
  }

  .balloonOne,
  .balloonTwo,
  .balloonThree,
  .balloonFour {
    position: absolute;
    width: 85px;
    height: 95px;
    border-radius: 50%;
  }

  .balloonOne {
    background-color: rgb(239, 71, 111, 0.7);
    left: -10px;
    top: 50px;
  }

  .balloonTwo {
    background-color: rgb(6, 214, 160, 0.7);
    left: 50px;
    top: 20px;
  }

  .balloonThree {
    background-color: rgb(255, 209, 102, 0.7);
    left: 110px;
    top: 50px;
  }

  .balloonFour {
    background-color: rgb(17, 138, 178, 0.7);
    left: 170px;
    top: 20px;
  }

  .balloonOne:before,
  .balloonTwo:before,
  .balloonThree:before,
  .balloonFour:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 155px;
    background-color: #ffd166;
    top: 95px;
    left: 43px;
  }

  .balloonOne:after,
  .balloonTwo:after,
  .balloonThree:after,
  .balloonFour:after {
    content: '';
    position: absolute;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    top: 94px;
    left: 37px;
  }

  .balloonOne:after {
    border-bottom: 10px solid #ef476f;
  }

  .balloonTwo:after {
    border-bottom: 10px solid #06d6a0;
  }

  .balloonThree:after {
    border-bottom: 10px solid #ffd166;
  }

  .balloonFour:after {
    border-bottom: 10px solid #118ab2;
  }

  .cardInside {
    border: black solid 3px;
    position: absolute;
    background-color: #fff;
    width: 250px;
    height: 350px;
    z-index: -1;
    left: 0;
    top: 0;
    /* box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2); */
  }

  p {
    font-family: 'Brush Script MT', cursive;
    margin: 40px;
    color: #333;
  }

  .name {
    position: absolute;
    left: 150px;
    top: 200px;
    color: #333;
  }

  .back {
    font-family: Tahoma, sans-serif;
    color: #333;
    text-align: center;
    margin: 30px;
    outline-color: #333;
    outline-style: dotted;
  }
`
