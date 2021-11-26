import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import Auth from '@aws-amplify/auth'
import { from } from 'rxjs'
import { APIService } from 'src/app/API.service'
import { AuthService } from '../auth.service'

@Component({
    selector: 'app-confirm-user',
    templateUrl: './confirm-user.component.html',
    styleUrls: ['./confirm-user.component.css']
})
export class ConfirmUserComponent implements OnInit {
    username: string = ''
    verificationCode = new FormControl('', Validators.required)

    constructor(
        private auth: AuthService,
        private route: ActivatedRoute,
        private api: APIService
    ) {}

    ngOnInit(): void {
        this.username = this.route.snapshot.queryParamMap.get('username') || ''
    }

    verifyUser() {
        console.log(this.username)
        from(this.auth.confirmUser(this.username, this.verificationCode.value)).subscribe(
            (user) => {
                console.log('Confirmed user', user)
            },
            (err) => console.error('Error Confirming User: ', err)
        )
    }
}
