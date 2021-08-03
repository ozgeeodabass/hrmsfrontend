import React from 'react'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import CandidateInfo from '../components/pages/CandidateInfo'
import JobAdvertisementsList from '../components/pages/JobAdvertisementsList'
import JobDetail from '../components/pages/JobDetail'
import Filters from './Filters'

export default function Dashboard() {
    return (
        <div>

<Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filters></Filters>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAdvertisementsList}/>
            <Route exact path="/jobAdvertisements" component={JobAdvertisementsList}/>
            <Route path="/jobAdvertisements/:id" component={JobDetail}/>
            <Route path="/myInfo" component={CandidateInfo}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

        </div>
    )
}
