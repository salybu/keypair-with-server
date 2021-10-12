import { styled } from '@mui/material/styles';
import { MenuItem, Select as SelectComponent, FormControl } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface ISelectItem {
  value: string;
  label: string;
}

interface ISelect {
  options: ISelectItem[];
  width?: string;
}

const SelectStyled = styled(SelectComponent)({
  width: 192,
  height: 32,
  marginRight: '22px',
  borderRadius: '8px',
  fontSize: '14px',
  fontFamily: 'Montserrat',
  color: '#52575C',
});

const Select = ({ options, width }: ISelect): JSX.Element => {
  return (
    <FormControl>
      <SelectStyled IconComponent={KeyboardArrowDownIcon} value={options[0].value} sx={{ width: width }}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectStyled>
    </FormControl>
  );
};

export default Select;
