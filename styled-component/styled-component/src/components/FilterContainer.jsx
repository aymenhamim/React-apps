import {
  StyledFilterContainer,
  StyledFilterItem,
  StyledLeftContainer,
  StyledSelectFilter,
} from './styles/FilterContainer.styled';

function FilterContainer() {
  return (
    <StyledFilterContainer>
      <StyledLeftContainer>
        <StyledFilterItem>Mouse</StyledFilterItem>
        <StyledFilterItem>Keyboard</StyledFilterItem>
        <StyledFilterItem>Headset</StyledFilterItem>
        <StyledFilterItem>Monitor</StyledFilterItem>
        <StyledFilterItem>Chair</StyledFilterItem>
        <StyledFilterItem>Manette</StyledFilterItem>
        <StyledFilterItem>Laptop</StyledFilterItem>
      </StyledLeftContainer>

      <StyledSelectFilter>
        <option value="">BY PRICE</option>
        <option value="">BY DATE</option>
        <option value="">POPULAR</option>
      </StyledSelectFilter>
    </StyledFilterContainer>
  );
}

export default FilterContainer;
