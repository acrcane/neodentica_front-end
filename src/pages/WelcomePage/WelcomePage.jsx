import React from 'react'
import { Container, Title, List, ListItem, Icon, Text, Button} from './WelcomePage.styled'
import icons from '../../icons/symbol-defs.svg'



const WelcomePage = () => {
  return (
    <Container> 
        <Title>Welcome to Neo salary calc</Title>
        <List>
          <ListItem>
            <Icon><use href={`${icons}#icon-table2`}></use></Icon>
            <Text>Creating timesheet tables and calculations.</Text>
          </ListItem>
          <ListItem>
            <Icon><use href={`${icons}#icon-calendar`}></use></Icon>
            <Text>Creating for moderators work schedule and monitoring work schedule for everyone. In progress</Text>
          </ListItem>
          <ListItem>
            <Icon><use href={`${icons}#icon-airplane`}></use></Icon>
            <Text>Issuing leave requests in progress</Text>
          </ListItem>
        </List>
        <Button>Try calc</Button>
    </Container>
  )
}

export default WelcomePage
