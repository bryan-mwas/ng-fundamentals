import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: 'events-list.html'
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00am',
        price: 599.99,
        image_url: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}