import React from 'react'
import cn from 'classnames'
import { IconButton } from 'UI'
import stl from './errorItem.module.css';
import {Duration} from "luxon";

function ErrorItem({ error = {}, onErrorClick, onJump, inactive, selected }) {
  return (
    <div className={ cn(stl.wrapper, 'py-3 px-4 flex cursor-pointer', {
        [stl.inactive]: inactive,
        [stl.selected]: selected
    }) } onClick={onJump}>
        <div className={"self-start pr-4 color-red"}>{Duration.fromMillis(error.time).toFormat('mm:ss.SSS')}</div>
      <div className="mr-auto overflow-hidden">
        <div className="color-red mb-1 cursor-pointer code-font">
          {error.name}
          <span className="color-gray-darkest ml-2">{ error.stack0InfoString }</span>
        </div>
        <div className="text-sm color-gray-medium">{error.message}</div>
      </div>
      <div className="self-center">
        <IconButton red onClick={onErrorClick} label="DETAILS" />
      </div>
    </div>
  )
}

export default ErrorItem
