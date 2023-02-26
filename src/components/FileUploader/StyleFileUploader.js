import styled from 'styled-components';

export default styled.div`
  #upload-container {
    padding: 30px;
    text-align: ${props => props.isFile ? 'left' : 'center'};
    cursor: pointer;
    border: dashed;
    border-width: 2px;
    border-color: rgba(1, 1, 1, 0.2);
    background-color: rgb(238 238 238);

    #upload-help-text {
      display: ${props => props.isFile ? 'none' : 'block'};

      input {
        display: none;
      }
    }

    #upload-filelist {
      display: inline-block;

      ul {
        display: flex;

        li {
          margin: 0 5px;
          border: dashed;
          border-width: 2px;
          border-color: rgba(1, 1, 1, 0.2);
          background-color: rgb(238 238 238);

          >div {
            display: flex;
            
            label {
              display: inline-block;
              width: 100px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }

          img {
            width: 100px;
          }
        }
      }
    }
  }
`