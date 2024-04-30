import './stats.scss'
const Stats = ({headline, data})=>{

    const renderStat = ()=>{
        return <div className='stats-card-container'>{data.map(({title,description})=>(<div className="stat">
        <div className='title'>
           {title}             
        </div>
        <div className='description'>
            {description}
        </div>
    </div>
        ))}
        </div>
    }

    return <div className="stats-container">
        {headline && <h1>{headline}</h1>}
        {renderStat()}
    </div>
}

export default Stats;