import { styled } from 'twin.macro'

const CardContainer = styled.div`
  .card {
    /* position: relative; */
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
export default CardContainer
