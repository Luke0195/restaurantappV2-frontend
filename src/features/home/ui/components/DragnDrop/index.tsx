import { Grid } from 'semantic-ui-react'
import { Content } from '@/widgets/Content'
import { DragItem } from '../DragItem'
import { FaClock } from 'react-icons/fa'
import { GiCook } from 'react-icons/gi'
import { ImCheckboxChecked } from 'react-icons/im'

export function DragnDrop() {
  return (
    <Content>
      <Grid className="w-screen">
        <Grid.Column width={'5'}>
          <DragItem
            type="waiting"
            data={{ icon: FaClock, text: `Fila de Espera` }}
          />
        </Grid.Column>
        <Grid.Column width={'5'}>
          <DragItem
            type="processing"
            data={{ icon: GiCook, text: 'Em produção' }}
          />
        </Grid.Column>
        <Grid.Column width={'5'}>
          <DragItem
            type="done"
            data={{ icon: ImCheckboxChecked, text: 'Pronto' }}
          />
        </Grid.Column>
      </Grid>
    </Content>
  )
}
