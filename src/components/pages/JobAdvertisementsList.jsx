import React from 'react'
import { Table } from 'semantic-ui-react'
import { useState,useEffect } from 'react'
import JobAdvertisementService from '../../Services/jobAdvertisementService'
import { Link } from 'react-router-dom'

export default function JobAdvertisementsList() {

  const [jobAdvertisements, setjobAdvertisements] = useState([])

  useEffect(()=>{
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getJobAdvertisements().then(result=>setjobAdvertisements(result.data.data))
  },[])

  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Durum</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            jobAdvertisements.map(jobAdvertisement => (
              <Table.Row key={jobAdvertisement.id}>
                <Table.Cell>{jobAdvertisement.jobPosition.title}</Table.Cell>
                <Table.Cell>{jobAdvertisement.isActive}</Table.Cell>
                <Table.Cell><Link  to={`/jobAdvertisements/${jobAdvertisement.id}`}>{jobAdvertisement.jobDescription}</Link></Table.Cell>
                <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
              </Table.Row>
            ))
          }

        </Table.Body>
      </Table>
    </div>
  )
        }
      
