/** @jsx jsx */
import { useState } from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../../styles";

interface SelectProps {
  value: string;
  options: Array<string>;
  onChange: (value: string, e?: any) => void;
  placeholder?: string;
}

export const SelectComponent = (props: SelectProps) => {
  const { value, options, placeholder, onChange } = props;

  const [isActive, toggle] = useState(false);
  const toggleSelect = (e?: any) => {
    if (e && e.which !== 13) {
      return;
    }
    toggle(!isActive);
  };

  return (
    <div
      tabIndex={0}
      role="listbox"
      onClick={() => toggleSelect()}
      onKeyDown={e => toggleSelect(e)}
      aria-expanded={isActive}
      css={[styles.select, isActive && styles.active]}
    >
      {value ? value : placeholder}
      <ul css={styles.options}>
        {options.map((option, i) => (
          <li
            css={[styles.option, value === option && styles.selected]}
            id={`option-${i}`}
            key={`select-${i}`}
            tabIndex={isActive ? 0 : -1}
            role="option"
            aria-selected={value === option}
            aria-posinset={i}
            aria-setsize={options.length}
            value={option}
            onClick={() => onChange(option)}
            onKeyDown={e => onChange(option, e)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  select: css`
    position: relative;
    border: 1px solid ${colors.grey};
    background-color: inherit;
    padding: 10px;
    color: white;
    list-style-type: none;
    outline: none;

    &:focus {
      box-shadow: 0px 0px 3px 1px ${colors.green};
    }

    &:hover {
      cursor: pointer;
    }

    &:after {
      position: absolute;
      content: "\\276E";
      right: 10px;
      transform: rotate(90deg);
      transition: transform 0.3s;
    }
  `,
  options: css`
    position: absolute;
    top: 100%;
    list-style-type: none;
    width: 100%;
    margin: 0 -10px;
    padding: 0;
    background-color: inherit;
    height: 0;
    max-height: 350px;
    overflow: auto;
  `,
  option: css`
    padding: 10px;
    border: 1px solid ${colors.grey};
    transition: color 0.3s;
    color: ${colors.grey};
    position: relative;

    + li {
      border-top: transparent;
    }

    &:focus,
    &:hover {
      color: ${colors.green};
    }
  `,
  active: css`
    &:after {
      transform: rotate(90deg) scaleX(-1);
    }

    ul {
      height: fit-content;
      overflow: auto;
      z-index: 2;
    }
  `,
  selected: css`
    color: ${colors.lightGreen};

    &:after {
      position: absolute;
      content: "\\2713";
      right: 10px;
    }

    &:hover {
      color: ${colors.lightGreen};
    }
  `
};
