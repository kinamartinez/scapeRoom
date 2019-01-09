import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ElectronService} from '../../providers/electron.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('cd') timer;
  started: Boolean = false;
  memberDiv: Boolean = false;
  afterMEmberDiv = false;
  formValid = false;
  showHint = true;
  showVideo = false;
  showHintVirtual = true;
  showVideoVirtual = false;
  showHintSelectiveExctraction = true;
  showVideoSelectiveExctraction = false;
  showHintCloudCollection = true;
  showVideoCloudCollection = false;
  showHintRon = true;
  showVideoUpload = false;
  showVideoFaceTool = false;
  emailedCode = false;
  emailCodeVerified = false;
  bipScreen = false;
  numberScreen = false;
  cloudioScreen = false;
  buisnessCard = false;
  ronScreen = false;
  successScreen = false;
  errorScreen = false;
  member1 = new FormControl('', [Validators.required]);
  member2 = new FormControl('', [Validators.required]);
  member3 = new FormControl('', [Validators.required]);
  member4 = new FormControl('', [Validators.required]);
  member5 = new FormControl('', [Validators.required]);
  t1Role = new FormControl('', [Validators.required]);
  t2Role = new FormControl('', [Validators.required]);
  t3Role = new FormControl('', [Validators.required]);
  t4Role = new FormControl('', [Validators.required]);
  t5Role = new FormControl('', [Validators.required]);
  emailCode = new FormControl('', [Validators.required]);
  bipCode = new FormControl('', [Validators.required]);
  cloudioCode = new FormControl('', [Validators.required]);
  numberCode = new FormControl('', [Validators.required]);
  ronCode = new FormControl('', [Validators.required]);
  memberForm = new FormGroup({
    member1: this.member1,
    member2: this.member2,
    member3: this.member3,
    member4: this.member4,
    member5: this.member5,
    t1Role: this.t1Role,
    t2Role: this.t2Role,
    t3Role: this.t3Role,
    t4Role: this.t4Role,
    t5Role: this.t5Role
  });
  codeForm = new FormGroup({
    emailCode: this.emailCode
  });

  cloudioForm = new FormGroup({
    cloudioCode: this.cloudioCode
  });
  bipForm = new FormGroup({
    bipCode: this.bipCode
  });

  numberForm = new FormGroup({
    numberCode: this.numberCode
  });

  ronForm = new FormGroup({
    ronCode: this.ronCode
  });

  constructor(public electronService: ElectronService) {

  }

  ngOnInit() {
  }

  roleSelected(event) {
    if (this.memberForm.invalid) {
      console.log('T1: ', this.member1.value);
      console.log('R1: ', this.t1Role.value);
    } else {
      this.getErrorMessage();
    }
  }

  getErrorMessage() {
    if (this.member1.hasError('required')) {
      this.formValid = false;
      return 'You must enter a value';
    }
    if (this.member2.hasError('required')) {
      this.formValid = false;
      return 'You must enter a value';
    }
    if (this.member3.hasError('required')) {
      this.formValid = false;
      return 'You must enter a value';
    }
    if (this.member4.hasError('required')) {
      this.formValid = false;
      return 'You must enter a value';
    }
    if (this.member5.hasError('required')) {
      this.formValid = false;
      return 'You must enter a value';
    }
    if (this.t1Role.hasError('required')) {
      this.formValid = false;
      return 'You must select a Role';
    }
    if (this.t2Role.hasError('required')) {
      this.formValid = false;
      return 'You must select a Role';
    }
    if (this.t3Role.hasError('required')) {
      this.formValid = false;
      return 'You must select a Role';
    }
    if (this.t4Role.hasError('required')) {
      this.formValid = false;
      return 'You must select a Role';
    }
    if (this.t5Role.hasError('required')) {
      this.formValid = false;
      return 'You must select a Role';
    }
    // return this.member1.hasError('required') ? 'You must enter a value' :
    //   '';
  }

  start() {
    this.started = true;
    this.memberDiv = true;
    // this.config.lefttime = 10800;
    this.timer.resume();
  }

  timerStart() {
    this.timer.pause();
  }

  timerFinished() {
    console.log('timer finished');
    this.timer.pause();
    this.errorScreen = true;
    this.memberDiv = false;
    this.started = false;
  }

  timerNotify(event) {
    console.log('Timer notify: ', event);
  }

  membersSelected() {
    if (this.memberForm.valid) {
      console.log('Form is valid');
      console.log('R1: ', this.t1Role.value);
      this.memberDiv = false;
      this.afterMEmberDiv = true;
    } else {
      console.log('Form is invalid');
    }
  }

  showhint() {
    this.showHint = false;
  }

  showhintVirtual() {
    this.showHintVirtual = false;
  }

  showhintSelectiveExctraction() {
    this.showHintSelectiveExctraction = false;
  }

  showhintCloudCollection() {
    this.showHintCloudCollection = false;
  }

  showhintRon() {
    this.showHintRon = false;
  }

  showvideo() {
    this.showVideo = true;
  }

  showvideoVirtual() {
    this.showVideoVirtual = true;
  }

  showvideoSelectiveExctraction() {
    this.showVideoSelectiveExctraction = true;
  }

  showvideoCloudCollection() {
    this.showVideoCloudCollection = true;
  }

  showvideoUpload() {
    this.showVideoUpload = true;
  }

  showvideoFaceTool() {
    this.showVideoFaceTool = true;
  }

  hidevideo() {
    this.showVideo = false;
  }

  hidevideoVirtual() {
    this.showVideoVirtual = false;
  }

  hidevideoSelectiveExctraction() {
    this.showVideoSelectiveExctraction = false;
  }

  hidevideoCloudCollection() {
    this.showVideoCloudCollection = false;
  }

  hidevideoUpload() {
    this.showVideoUpload = false;
  }

  hidevideoFaceTool() {
    this.showVideoFaceTool = false;
  }

  sendEmail() {
    window.location.href = 'mailto:SKO2019Product@cellebtrite.com?subject=Evidence&body=attach the picture you copied with UoA and send';
  }
  goBackMailScreen(){
    this.afterMEmberDiv = true;
    this.emailedCode = false;
  }
  afterEmail() {
    this.afterMEmberDiv = false;
    this.emailedCode = true;
  }

  verifyEmailCode() {
    if (this.emailCode.value === '147') {
      this.emailedCode = false;
      this.emailCodeVerified = true;
    } else {
      Swal({title: 'Oops!', text: 'Try a different answer', type: 'error'});
    }
  }

  BIPScreen() {
    this.emailCodeVerified = false;
    this.bipScreen = true;
  }

stringToLowerCase(value) {
  const stringInput = value;
  return stringInput.toLowerCase();
}
  bipCodeVerify() {
    if (this.stringToLowerCase(this.bipCode.value) === 'bip') {
      this.bipScreen = false;
      this.cloudioScreen = true;
    } else {
      Swal({title: 'Oops!', text: 'Try a different answer', type: 'error'});
    }
  }

  cloudioCodeVerify() {
    if (this.stringToLowerCase(this.cloudioCode.value) === 'cloudio') {
      this.cloudioScreen = false;
      this.numberScreen = true;
    } else {
      Swal({title: 'Oops!', text: 'Try a different answer', type: 'error'});
    }
  }

  numberCodeVerify() {
    if (this.numberCode.value === '0733948156') {
      this.numberScreen = false;
      this.buisnessCard = true;
    } else {
      Swal({title: 'Oops!', text: 'Try a different phone number', type: 'error'});
    }
  }

  cardVerify() {
    this.buisnessCard = false;
    this.ronScreen = true;
  }

  ronCodeVerify() {
    if (this.stringToLowerCase(this.ronCode.value) === 'ron') {
      this.ronScreen = false;
      this.successScreen = true;
    } else {
      Swal({title: 'Oops!', text: 'Try a different name and hurry up, time is running out!', type: 'error'});
    }
  }

  openDirectory() {
    this.electronService.shell.openItem('C:\\Unleash the power\\Of digital intelligence');
  }
}


