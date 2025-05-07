import './Host.scss'

function Host({ host, picture }) {
      return (
        <div className="host-container">
          <h3 className="host__name">{host}</h3>
            <img src={picture} alt={`${host} badge`} className="host__picture" />
        </div>
      )
    }
    
    export default Host