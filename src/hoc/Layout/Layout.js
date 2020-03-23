import React, {useState} from 'react'
import classes from './Layout.module.scss'
import axios from 'axios'
import Form from '../../components/Form/Form'
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = props => {

    let[city, setCity] = useState('')
    let[cases, setCases] = useState('')
    let[deaths, setDeath] = useState('')
    let[title, setTitle] = useState('')
    let[recovered, setrecovered] = useState('')

    const getRequest = e => {
        e.preventDefault()
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
        .then(res => {
            res.data.map((index) => {
                if (index.country === city){
                        setTitle(title = city)
                        setCases(cases = index.cases)
                        setDeath(deaths = index.deaths)
                        setrecovered(recovered = index.recovered)
                }
                return null
            })
        })
    }
    const addCountry = e => {
        setCity(city = e.target.value)
    }

    return (
        <div className = {classes.Layout}>
            <h3 style = {{marginBottom : '20px'}}>Covid-19 information</h3>
            <div className="card text-center">
                <div className="card-header">
                    <h2>{title}</h2>
                </div>
                <div className="card-body">
                    {
                        title
                        ? 
                        <React.Fragment>
                            <h5 className="card-title">Diseased: {cases}</h5>
                            <h5 className="card-title">Deaths: {deaths}</h5>
                            <h5 className="card-title">Recovered: {recovered}</h5>
                        </React.Fragment>
                        : null
                    }
                </div>
                <div className="card-footer text-muted">
                    <Form
                        value = {title}
                        getRequest = {getRequest}
                        addCountry = {addCountry}
                    />
                </div>
            </div>
        </div>
    )
}

export default Layout