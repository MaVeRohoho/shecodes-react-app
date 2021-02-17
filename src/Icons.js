import React from 'react'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
 
var MyComponent = React.createClass({
  render: function() {
    return (
      <FontAwesome
        className="super-crazy-colors"
        name="rocket"
        cssModule={faStyles}
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    )
  },
})


//`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`


