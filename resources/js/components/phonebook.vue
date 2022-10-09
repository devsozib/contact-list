<template>
    <div>
        <table class="table manage-candidates-top mb-0">
                        <thead>
                          <tr>
                            <th>Phonebook List</th>
                            <th class="text-center">Status</th>
                            <th class="action text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="candidates-list">
                            <td class="title">
                              <div class="thumb">
                                <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="">
                              </div>
                              <div class="candidate-list-details">
                                <div class="candidate-list-info">
                                  <div class="candidate-list-title">
                                    <h5 class="mb-0"><a href="#">Brooke Kelly</a></h5>
                                  </div>
                                  <div class="candidate-list-option">
                                    <ul class="list-unstyled">
                                      <li><i class="fas fa-map-marker-alt pr-1"></i>user@g.c</li>
                                      <li><i class="fas fa-filter pr-1"></i>017897837699</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="candidate-list-favourite-time text-center">
                              <a class="candidate-list-favourite order-2 text-danger" href="#"><i class="fas fa-star"></i></a>
                              <span class="candidate-list-time order-1">Favourite</span>
                            </td>
                            <td>
                              <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                <li><a href="#" class="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i class="far fa-eye"></i></a></li>
                                <li><a href="#" class="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li>
                                <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
    </div>
</template>

<script>
  export default{
    name: "phonebook",
    data(){
        return{
            phoneNumbers: [{
                phone: ''
            }]
        }
    },

    methods:{
        add(index) {
            this.inputs.push({ name: '' });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        }
    }
  }
</script>

