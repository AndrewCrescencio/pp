import styled from "@emotion/styled";
export const MobileTabsControl = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  background-color: #fff;
  padding: 16px 20px;
`;
export const AutocompleteWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden !important;
  margin-top: 32px;
  padding-top: 8px;
  span {
    font-family: inherit;
    position: absolute;
    top: -2px;
    left: 20px;
    color: #a3b8b0;
    font-weight: 500;
    font-size: 14px;
    background-color: #fff;
    padding-left: 4px;
    padding-right: 4px;
  }

  > div {
    width: 100% !important;
    z-index: 9;

    input {
      background-color: #fff;
      border: 2px solid #cad6d1;
      width: 100%;
      display: block;
      border-radius: 8px;
      padding: 14px 20px;
      height: 52px;

      &::placeholder {
        font-family: inherit;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #587169 !important;
      }
      &::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        color: #587169 !important;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #587169 !important;
        opacity: 1;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #587169 !important;
        opacity: 1;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #587169 !important;
      }
    }
    input + div {
      min-width: none !important;
      z-index: 9;
    }
  }
`;
