import React, { useEffect, useState } from 'react'
import fetchHeroes from './API/fetchHeroes'
import getSortedHeroes from './API/getSortedHeroes'
import HeroesList from './components/HeroesList'
import MyButton from './components/UI/button/MyButton'
import Loader from './components/UI/loader/Loader'
import MySelect from './components/UI/select/MySelect'
import HeroFeatures from './components/heroFeatures/HeroFeatures'
import classes from './styles/App.module.css'
import './styles/index.css'
function App() {
	const [heroes, setHeroes] = useState([])
	const [heroesFeatures, setHeroesFeatures] = useState([])
	const [selectedSort, setSelectedSort] = useState('')
	const [isHeroesLoading, setIsHeroesLoading] = useState(false)

	useEffect(() => {
		setIsHeroesLoading(true)
		fetchHeroes(callback)
		setIsHeroesLoading(false)
	}, [])

	const sortedHeroes = getSortedHeroes(heroes, selectedSort)

	const heroInfo = hero => {
		setHeroesFeatures([hero])
	}

	const callback = temp => {
		console.log(temp)
		setIsHeroesLoading(false)
		setHeroes([...heroes, ...temp])
	}

	const sortHeroes = sort => {
		setSelectedSort(sort)
	}

	return (
		<div className={classes.App}>
			<h1 className={classes.heroes__header}>
				<strong className={classes.heroes__logo}>Pokedex</strong>
			</h1>
			<MySelect
				value={selectedSort}
				onChange={sortHeroes}
				defaultValue=' - Filter by type - '
				options={[
					{ value: 'normal' },
					{ value: 'fighting' },
					{ value: 'flying' },
					{ value: 'poison' },
					{ value: 'ground' },
					{ value: 'rock' },
					{ value: 'bug' },
					{ value: 'ghost' },
					{ value: 'steel' },
					{ value: 'fire' },
					{ value: 'water' },
					{ value: 'grass' },
					{ value: 'electric' },
					{ value: 'psychic' },
					{ value: 'ice' },
					{ value: 'dragon' },
					{ value: 'dark' },
					{ value: 'fairy' },
					{ value: 'shadow' },
				]}
			/>
			<div className={classes.heroes}>
				<div className={classes.heroes__table}>
					{isHeroesLoading ? (
						<Loader />
					) : (
						<div className={classes.heroes__monitor}>
							{sortedHeroes.length !== 0 ? (
								<HeroesList heroInfo={heroInfo} heroes={sortedHeroes} />
							) : (
								<div className={classes.report}>No such pokemon!</div>
							)}
						</div>
					)}
					<MyButton
						onClick={() => {
							setIsHeroesLoading(true)
							fetchHeroes(callback)
						}}
					>
						<strong>Load More</strong>
					</MyButton>
				</div>
				<div className={classes.heroes__features}>
					{heroesFeatures.length !== 0 ? (
						heroesFeatures.map(heroFeatures => (
							<HeroFeatures heroFeatures={heroFeatures} key={heroFeatures.id} />
						))
					) : (
						<div className={classes.report}>
							Choose a pokemon to see full features!
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default App
