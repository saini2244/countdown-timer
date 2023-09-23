import '../assets/css/lap.scss'

export const Laps = ({ laps }) => {
    return (
        <div className="lap-container">
            <h1>Laps</h1>
            {
                Object.keys(laps).map((lap, index) => (
                    <div className='lap-details' key={index}>
                        <span className='lap-index'>#{index}</span>
                        <span className='lap-time'>{laps[lap]}</span>
                        <span className='lap-end-time'>{lap}</span>
                    </div>
                ))
            }
        </div>
    )
}