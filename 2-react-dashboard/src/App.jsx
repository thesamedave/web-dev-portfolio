import React from 'react'
import Card from './components/Card'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

const data = [
  { name: 'Lun', users: 400 },
  { name: 'Mar', users: 300 },
  { name: 'Mié', users: 500 },
  { name: 'Jue', users: 700 },
  { name: 'Vie', users: 600 }
]

function App() {
  return (
    <div className="dashboard">
      <h1>Dashboard de Actividad</h1>
      <div className="cards">
        <Card title="Usuarios activos" value="620" />
        <Card title="Visitas semanales" value="3,450" />
        <Card title="Conversión" value="5.2%" />
      </div>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#00ffff" />
      </LineChart>
    </div>
  )
}

export default App
