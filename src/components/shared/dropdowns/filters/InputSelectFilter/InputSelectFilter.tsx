'use client'
import React, { PropsWithChildren } from 'react'
import { MultiSelect } from '@mantine/core'
import classes from './InputSelectFilter.module.css'
import { Option } from '@/utils/types/option'

interface InputSelectFilterSettings {
  title: string;
  options: Option[];
  setData: (data: any) => void;
}

const InputSelectFilter = (props: InputSelectFilterSettings) => {
  return (
    <MultiSelect
      classNames={{
        wrapper: classes.wrapper,
        dropdown: classes.dropdown,
        input: classes.input,
        label: classes.label,
        options: classes.options,
      }}
      onChange={props.setData}
      data={props.options}
      label={props.title}
      searchable
      clearable
      variant="standard"
    />
  )
}

export default InputSelectFilter