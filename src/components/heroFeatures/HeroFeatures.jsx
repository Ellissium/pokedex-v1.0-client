import getHeroColors from '../../API/heroColors';
import classes from './HeroFeatures.module.css'

const HeroFeatures = ({ heroFeatures }) => {
    let heroColors = ["gray","black"]
    heroColors = getHeroColors(heroFeatures);
   
    return (
        <div 
            className={classes.hero__features} 
            style={{background: heroColors[0], borderColor:  heroColors[1]}}
        >
            <div className={classes.features__content}>
                <div className={classes.hero__image}>
                    <img alt={heroFeatures.name} src={heroFeatures.features.sprites.front_default}/>
                </div>
                <strong className={classes.hero__name}>{heroFeatures.name + ' #' + heroFeatures.id}</strong>
                <div className={classes.features__list}>
                    <table className={classes.features__table}>
                        <tr>
                            <td>Type</td>
                            <td>{heroFeatures.features.types.map(types => 
                                <div className={classes.hero__type} key={types.slot}>{types.type.name}</div>
                            )}</td>
                        </tr>
                        <tr>
                            <td>Attack</td>
                            <td>{heroFeatures.features.stats[1].base_stat}</td>
                        </tr>
                        <tr>
                            <td>Defense</td>
                            <td>{heroFeatures.features.stats[2].base_stat}</td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>{heroFeatures.features.stats[0].base_stat}</td>
                        </tr>
                        <tr>
                            <td>SP Attack</td>
                            <td>{heroFeatures.features.stats[3].base_stat}</td>
                        </tr>
                        <tr>
                            <td>SP Defense</td>
                            <td>{heroFeatures.features.stats[4].base_stat}</td>
                        </tr>
                        <tr>
                            <td>Speed</td>
                            <td>{heroFeatures.features.stats[5].base_stat}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{heroFeatures.features.weight}</td>
                        </tr>
                        <tr>
                            <td>Total moves</td>
                            <td>{heroFeatures.features.moves.length}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HeroFeatures