// import { FC, HTMLAttributes, memo, RefCallback } from 'react';
// import {
//   InputWrapper,
//   InputStyled,
//   Label,
//   InputContainer,
// } from './input.styled';
// import { IconName } from '@/app/public/icons';
// import { Icon } from '../icons';

// interface InputProps extends HTMLAttributes<HTMLInputElement> {
//   labelName?: string;
//   inputName: string;
//   placeHolder?: string;
//   icon?: IconName;
//   variants: 'default' | 'dark';
//   ref?:
//     | React.RefObject<HTMLInputElement | null>
//     | RefCallback<HTMLInputElement>;
// }

// const Input: FC<InputProps> = memo(
//   ({
//     inputName,
//     placeHolder = '',
//     labelName,
//     icon,
//     variants,
//     defaultValue,
//     ...props
//   }) => {
//     return (
//       <InputWrapper>
//         {labelName && <Label htmlFor={inputName}>{labelName}</Label>}
//         <InputContainer>
//           {icon && <Icon icon={icon} size="4xs" />}
//           <InputStyled
//             $variants={variants}
//             $withIcon={!!icon}
//             placeholder={placeHolder}
//             name={inputName}
//             id={inputName}
//             value={defaultValue}
//             {...props}
//           />
//         </InputContainer>
//       </InputWrapper>
//     );
//   },
// );

// export { Input };
