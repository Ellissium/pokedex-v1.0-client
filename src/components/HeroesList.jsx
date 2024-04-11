import React from 'react'
import HeroItem from './HeroItem'
import classes from '../styles/App.module.css'

const HeroesList = ({ heroes, heroInfo }) => {
    return (
        <div className={classes.heroes__list}>
            {heroes.map(hero =>
                <HeroItem heroInfo={heroInfo} hero={hero} key={hero.id} />
            )}
        </div>
    )
}

export default HeroesList