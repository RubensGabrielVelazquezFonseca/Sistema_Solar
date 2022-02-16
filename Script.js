const planets = document.querySelectorAll('.planet')
const p_radii = [22]
let p_radians = new Array(1).fill(0)
const p_velocities = [1.607]

const p_orbits = document.querySelectorAll('.p-orbit')

p_orbits.forEach((p_orbit, index)=>{
  p_orbit.style.height = `${p_radii[index]}vmin`
  p_orbit.style.width = `${p_radii[index]}vmin`
})

setInterval( ()=> {
  planets.forEach( (planet, index)=>{
    planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}vmin`
    planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`
    p_radians[index] += p_velocities[index] * 0.02
  })

  moon.style.left = `${earthX() + (Math.cos(m_radians) * m_radius )}vmin`
  moon.style.top = `${earthY() + (Math.sin(m_radians) * m_radius )}vmin`
  m_radians += m_velocity * 0.02

  m_orbit.style.left = `${earthX()}vmin`
  m_orbit.style.top = `${earthY()}vmin`
}, 1000/60)

