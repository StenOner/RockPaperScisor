import React from 'react'
import classes from './Item.module.css'
import { ReactComponent as RockSVG } from '../../assets/images/icon-rock.svg'
import { ReactComponent as PaperSVG } from '../../assets/images/icon-paper.svg'
import { ReactComponent as ScissorsSVG } from '../../assets/images/icon-scissors.svg'
import { ReactComponent as SpockSVG } from '../../assets/images/icon-spock.svg'
import { ReactComponent as LizardSVG } from '../../assets/images/icon-lizard.svg'

const SVG_MAP = new Map()
SVG_MAP.set('ROCK', [RockSVG, 'radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))'])
SVG_MAP.set('PAPER', [PaperSVG, 'radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))'])
SVG_MAP.set('SCISSORS', [ScissorsSVG, 'radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))'])
SVG_MAP.set('SPOCK', [SpockSVG, 'radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))'])
SVG_MAP.set('LIZARD', [LizardSVG, 'radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))'])

const Item = ({ item = 'rock', className = '', cursor = 'pointer', onPick }) => {
    const [ComponentSVG, ComponentBackground] = SVG_MAP.get(item.toUpperCase())

    const PickHandler = () => {
        try{
            onPick(item)
        }catch(ex){
            console.log(ex.message)
        }
    }

    return (
        <div onClick={PickHandler} className={`${className} ${classes.item}`} style={{ background: ComponentBackground, cursor }}>
            <div className={classes["inner-circle"]}>
                <ComponentSVG />
            </div>
        </div>
    )
}

export default Item
