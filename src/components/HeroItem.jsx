import React from 'react'
import getHeroColors from '../API/heroColors';
import classes from './heroFeatures/HeroFeatures.module.css'

const HeroItem = ({ hero, heroInfo }) => {
    let heroColors = ["gray", "black"]
    let indexOfColor = 0;

    heroColors = getHeroColors(hero);

    return (
        <div 
            className={classes.hero__features + " " + classes.hero__animation} 
            onClick={(e) => heroInfo(hero)} 
            style={{ background: heroColors[0], borderColor: heroColors[1]}}
        >
            <div className={classes.hero__content}>
                <div className={classes.hero__image}>
                    <img alt={hero.name} src={hero.features.sprites.front_default}/>
                </div>
                <strong className={classes.hero__name}>{hero.name + ' #' + hero.id}</strong>
                <div className={classes.hero__types}>
                    {hero.features.types.map(types =>
                        <div
                            className={classes.hero__type + " " + classes.hero__list__type}
                            key={types.slot}
                            style={{background: heroColors[indexOfColor++]}}
                        >
                            {types.type.name}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeroItem