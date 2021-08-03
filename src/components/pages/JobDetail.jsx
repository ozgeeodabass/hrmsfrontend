import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertisementService from '../../Services/jobAdvertisementService'

export default function JobDetail() {
    let { id } = useParams();

    const [jobAdvertisement, setjobAdvertisement] = useState({})

  useEffect(()=>{
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getJobAdvertisementById(id).then(result=>setjobAdvertisement(result.data.data))
  },[])


    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{jobAdvertisement.id}</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green' icon="check">
                                Başvur
                            </Button>
                            <Button basic color='grey' icon="star">
                                Favorilere Ekle
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                
            </Card.Group>
        </div>
    )
}