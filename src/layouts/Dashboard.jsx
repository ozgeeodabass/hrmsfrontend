import React from 'react'
import { Grid } from 'semantic-ui-react'
import JobAdvertisementsList from '../components/pages/JobAdvertisementsList'
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
            <JobAdvertisementsList></JobAdvertisementsList>
          </Grid.Column>
        </Grid.Row>
      </Grid>

        </div>
    )
}
