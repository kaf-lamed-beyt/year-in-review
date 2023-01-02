import styled from 'styled-components'

export const SearchBox = styled.div`
  // height: 50px;
  // width: 350px;
  margin: 0 auto;

  & input {
    width: 100%;
    height: 100%;
    padding: 14px;
    background: ghostwhite;
    border-radius: 4px;
    outline: none;
    border: 1px solid rgb(211, 207, 207);

    &:focus {
      border: 1px solid rgba(255, 18, 51);
    }
  }

  & svg {
    color: rgba(255, 18, 51);
    height: 30px;
    width: 30px;
  }

  & span {
    position: absolute;
    margin: 10px 0 0 -40px;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
    padding: 10px;

    & span {
      margin: 10px 0 0 -30px;
    }
  }

  @media only screen and (max-width: 576px) {
    input::placeholder {
      font-size: 15px;
    }

    svg {
      height: 22px;
      margin-top: 3px;
    }
  }
`
