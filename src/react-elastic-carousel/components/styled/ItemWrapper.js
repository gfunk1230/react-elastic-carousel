import styled from "styled-components";

export default styled.div.attrs({
  style: ({ padding, width, height }) => ({ padding, width, height })
})`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  user-select: none;
  justify-content: ${({ itemPosition }) => itemPosition};
`;
