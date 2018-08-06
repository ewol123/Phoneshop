<template>
    <div class="card  col-12  mx-auto p-0">

                            <div class="card-header">
                                <div class="text-center">
                                    <h3>Profile</h3>
                                </div>
                            </div>

                          
                            <div class="card-body mx-sm-auto">
                                <table class="table table-responsive">
                                    <tbody>
                                    <tr>
                                        <th scope="row">Name:</th>
                                        <td>{{User.name}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email:</th>
                                        <td>{{User.email}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">City:</th>
                                        <td>{{User.city}}</td>
                                    </tr>
                                     <tr>
                                        <th scope="row">Address:</th>
                                        <td>{{User.address}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">State:</th>
                                        <td>{{User.state}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Zip:</th>
                                        <td>{{User.zip}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Birth date /yy/mm/dd:</th>
                                        <td>{{User.birthdate}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Gender:</th>
                                        <td>{{User.gender}}</td>
                                    </tr>
                                   
                                    </tbody>
                                </table>
                               
                            </div>
 
                        </div>
</template>


<script>
export default {
    props:['User'],

  
}
</script>
