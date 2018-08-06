<template>
     
                        <div class="card mb-4 col-12  mx-auto p-0">

                            <div class="card-header">
                                <div class="text-center">
                                    <h3>Edit profile</h3>
                                </div>
                            </div>

                            <div class="row  bg-light m-0">
                             </div>
                            <div class="card-body mx-auto">
                                <table class="table table-responsive">
                                    
                                    <tbody>
                                    <tr>
                                        <th scope="row">Name:</th>
                                        <td>  <input type="text" class="form-control" v-model="user.name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email:</th>
                                        <td> <input type="text" class="form-control" v-model="user.email" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">City:</th>
                                        <td> <input type="text" class="form-control" v-model="user.city" placeholder="City" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                      <tr>
                                        <th scope="row">Address</th>
                                        <td> <input type="text" class="form-control" v-model="user.address" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">State</th>
                                        <td> <input type="text" class="form-control" v-model="user.state" placeholder="State" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Zip</th>
                                        <td> <input type="text" class="form-control" v-model="user.zip" placeholder="Zip code" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Birth date /yy/mm/dd:</th>
                                        <td> <input type="text" class="form-control" v-model="user.birthdate" placeholder="Birth date" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Gender:</th>
                                        <td> <input type="text" class="form-control" v-model="user.gender" placeholder="Gender" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Password:</th>
                                        <td> <input :type="passwordVisible ? 'text' : 'password'" class="form-control" v-model="password" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
                                        </td>
                                       <i class="fa fa-eye mt-3 fa-2x" v-b-tooltip.hover.bottom="'show password'" v-on:click="passwordVisible = !passwordVisible"></i>  
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Password again:</th>
                                        <td> <input :type="passwordVisible ? 'text' : 'password'" class="form-control" v-model="c_password" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="text-center mb-3" >
                                <a  class="btn btn-primary text-light ml-lg-2" >Confirm</a>
                        </div>
                    </div>
                </div>
            </div>
</template>




<script>
export default {
    props: ['user'],
    data(){
        return {
        passwordVisible: false,
        password:'',
        c_password:''
        }
    }
    
}
</script>
