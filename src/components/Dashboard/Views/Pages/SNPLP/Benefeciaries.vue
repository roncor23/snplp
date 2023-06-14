<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <el-button type="primary" @click="showModal">Add Beneficiary</el-button>
                <el-dialog :title="editMode ? 'Edit Beneficiary' : 'Add Beneficiary'" :visible.sync="modalVisible" @close="resetForm" width="95%">
                    <el-form ref="beneficiaryForm" :model="form" label-width="120">
                        <el-divider content-position="left">Personal Information</el-divider>
                        <el-form class="form-container">
                            <div class="form-row">
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>Last Name</label>
                                    <el-form-item required>
                                        <el-input v-model="form.last_name"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Maiden Name</label>
                                    <el-form-item>
                                        <el-input v-model="form.maiden_name"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>First Name</label>
                                    <el-form-item required>
                                        <el-input v-model="form.first_name"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Middle Name</label>
                                    <el-form-item>
                                        <el-input v-model="form.middle_name"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Name Ext</label>
                                    <el-form-item>
                                        <el-input v-model="form.name_ext"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Course</label>
                                    <el-form-item>
                                        <el-input v-model="form.course"></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form>
                        <el-form class="form-container">
                            <div class="form-row">
                                <div class="form-item">
                                    <label class="custom-label">Month & Year Graduated</label>
                                    <el-form-item required>
                                        <el-input v-model="form.month_year_graduated"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>Sex</label>
                                    <el-form-item>
                                        <el-input v-model="form.sex"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Comaker</label>
                                    <el-form-item required>
                                        <el-input v-model="form.comaker"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">HEI</label>
                                    <el-form-item>
                                        <el-input v-model="form.hei"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Contact #</label>
                                    <el-form-item>
                                        <el-input v-model="form.contact_number"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Address</label>
                                    <el-form-item>
                                        <el-input v-model="form.address"></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form>
                        <el-form class="form-container">
                            <div class="form-row">
                                <div class="form-item">
                                    <label class="custom-label">Email</label>
                                    <el-form-item required>
                                        <el-input v-model="form.email"></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form>
                        <el-divider content-position="left">Employment Information</el-divider>
                        <el-form class="form-container">
                            <div class="form-row">
                                <div class="form-item">
                                    <label class="custom-label">1st Date of Employment</label>
                                    <el-form-item required>
                                        <el-input v-model="form.first_date_employment"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Name of Company</label>
                                    <el-form-item>
                                        <el-input v-model="form.company_name"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Job Title / Occupation</label>
                                    <el-form-item required>
                                        <el-input v-model="form.job_title"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Department</label>
                                    <el-form-item>
                                        <el-input v-model="form.department"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Company Address</label>
                                    <el-form-item>
                                        <el-input v-model="form.company_address"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">No. of Years Employed</label>
                                    <el-form-item>
                                        <el-input v-model="form.no_years_emp"></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form>
                        <el-divider content-position="left">Status of Payment</el-divider>
                        <el-form class="form-container">
                            <div class="form-row">
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>Status (Full or Partial Payment)</label>
                                    <el-form-item required>
                                        <el-input v-model="form.status"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>Name was Submitted ot NBI</label>
                                    <el-form-item required>
                                        <el-input v-model="form.submitted_nbi"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"></label>
                                    <el-form-item>
                                        <el-input hidden></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"></label>
                                    <el-form-item>
                                        <el-input hidden></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"></label>
                                    <el-form-item>
                                        <el-input hidden></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"></label>
                                    <el-form-item>
                                        <el-input hidden></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form>
                        <el-divider content-position="left">Disbursements</el-divider>
                        <el-form class="form-container">
                            <div class="form-row">
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>Principal Loan</label>
                                    <el-form-item required>
                                        <el-input v-model="form.principal_loan"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>Interest during Repayment Period</label>
                                    <el-form-item>
                                        <el-input v-model="form.interest_during_repayment_period"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>Penalty</label>
                                    <el-form-item required>
                                        <el-input v-model="form.penalty"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>Total Full Amortization</label>
                                    <el-form-item>
                                        <el-input v-model="form.total_full_amortization"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"></label>
                                    <el-form-item>
                                        <el-input hidden></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"></label>
                                    <el-form-item>
                                        <el-input hidden></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form>
                        <el-divider content-position="left">Repayments</el-divider>
                        <el-form class="form-container">
                            <div class="form-row">
                                <div class="form-item">
                                    <label class="custom-label">Date Paid</label>
                                    <el-form-item required>
                                        <el-input v-model="form.date_paid"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Amount Paid</label>
                                    <el-form-item>
                                        <el-input v-model="form.amount_paid"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label">Confirmation Number</label>
                                    <el-form-item required>
                                        <el-input v-model="form.confirmation_number"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"><span class="text-danger">*</span>Total Amount Paid</label>
                                    <el-form-item>
                                        <el-input v-model="form.total_amount_paid"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="form-item">
                                    <label class="custom-label"></label>
                                    <el-form-item>
                                        <el-input hidden></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form>
                    </el-form>

                    <span slot="footer" class="dialog-footer">
                        <el-button @click="modalVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="updateBeneficiary" v-if="editMode">Update</el-button>
                        <el-button type="primary" @click="addBeneficiary" v-else>Add</el-button>
                    </span>
                </el-dialog>
          </div>
          <div class="card-body table-responsive table-full-width">
            <el-table :data="filteredTableData" style="width: 100%;" border>
                <!-- <el-table-column label="Id" property="id" width="50"></el-table-column> -->
                <el-table-column label="Last Name" property="last_name" width="200" fixed="left"></el-table-column>
                <el-table-column label="Maiden Name" property="maiden_name" width="200"></el-table-column>
                <el-table-column label="First Name" property="first_name" width="200" fixed="left"></el-table-column>
                <el-table-column label="Middle Name" property="middle_name" width="200" fixed="left"></el-table-column>
                <el-table-column label="Name Ext" property="name_ext" width="150"></el-table-column>
                <el-table-column label="Sex" property="sex"></el-table-column>
                <el-table-column label="Email" property="email" width="150"></el-table-column>
                <el-table-column label="Contact #" property="contact_number" width="150"></el-table-column>
                <el-table-column label="Address" property="address" width="150"></el-table-column>
                <el-table-column label="Comaker" property="comaker" width="150"></el-table-column>
                <el-table-column label="HEI" property="hei" width="250"></el-table-column>
                <el-table-column label="Course" property="course" width="200"></el-table-column>
                <el-table-column label="Month Year Graduated" property="month_year_graduated" width="250"></el-table-column>
                <el-table-column label="1st Date of Employment" property="employment_info.first_date_employment" width="250"></el-table-column>
                <el-table-column label="Name of Company" property="employment_info.company_name" width="200"></el-table-column>
                <el-table-column label="Job Title / Occupation" property="employment_info.job_title" width="250"></el-table-column>
                <el-table-column label="Department" property="employment_info.department" width="200"></el-table-column>
                <el-table-column label="Company Address" property="employment_info.company_address" width="200"></el-table-column>
                <el-table-column label="No of Years Employed" property="employment_info.no_years_emp" width="250"></el-table-column>
                <el-table-column label="Payment Status" property="status_info.status" width="200"></el-table-column>
                <el-table-column label="NBI Status" property="status_info.submitted_nbi" width="200"></el-table-column>
                <el-table-column label="Principal Loan" property="disbursement_info.principal_loan" width="200"></el-table-column>
                <el-table-column label="Interest during Repayment Period" property="disbursement_info.interest_during_repayment_period" width="320"></el-table-column>
                <el-table-column label="Penalty" property="disbursement_info.penalty" width="200"></el-table-column>
                <el-table-column label="Total Full Amortization" property="disbursement_info.total_full_amortization" width="235"></el-table-column>
                <el-table-column label="Date Paid" property="repayment_info.date_paid" width="200"></el-table-column>
                <el-table-column label="Amount Paid" property="repayment_info.amount_paid" width="200"></el-table-column>
                <el-table-column label="Confirmation Number" property="repayment_info.confirmation_number" width="220"></el-table-column>
                <el-table-column label="Total Amount Paid" property="repayment_info.total_amount_paid" width="200"></el-table-column>
                <el-table-column label="Outstanding Balance" width="250">
                    <template slot-scope="scope">
                        {{ scope.row.disbursement_info.total_full_amortization - scope.row.repayment_info.total_amount_paid }}
                    </template>
                </el-table-column>
                <el-table-column
                    label="Actions"
                    width="200"
                    fixed="right"
                >
                    <template slot="header" slot-scope="scope">
                        <el-input
                        v-model="search"
                        size="mini"
                        placeholder="Type to search"/>
                    </template>
                    <template slot-scope="scope">
                        <div class="button-container">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.row)" type="primary">Edit</el-button>
                            <!-- <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row)">Delete</el-button> -->
                        </div>

                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="totalItems"
                :page-size="pageSize"
                @current-change="handlePaginationChange"
            ></el-pagination>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn, Select, Button, Dialog, Form, FormItem, Input, Divider, Pagination  } from 'element-ui'
  import 'element-ui/lib/theme-chalk/dialog.css';
  import 'element-ui/lib/theme-chalk/form.css';
  import 'element-ui/lib/theme-chalk/form-item.css';
  import 'element-ui/lib/theme-chalk/input.css';
  import 'element-ui/lib/theme-chalk/divider.css';
  import 'element-ui/lib/theme-chalk/pagination.css';

  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.component(Select.name, Select)
  Vue.component(Button.name, Button)
  Vue.component(Dialog.name, Dialog);
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
  Vue.component(Input.name, Input);
  Vue.component(Divider.name, Divider);
  Vue.component('el-pagination', Pagination);
  export default {
    data () {
      return {
        editMode: false,
        totalItems: 4,
        currentPage: 1, // Current page
        pageSize: 4, // Number of items per page
        search: '',
        modalVisible: false,
        form: {
            last_name: '',
            maiden_name: '',
            first_name: '',
            middle_name: '',
            name_ext: '',
            course: '',
            month_year_graduated: '',
            sex: '',
            comaker: '',
            hei: '',
            contact_number: '',
            address: '',
            email: '',

            principal_loan: '',
            interest_during_repayment_period: '',
            penalty: '',
            total_full_amortization: '',

            company_address: '',
            no_years_emp: '',
            first_date_employment: '',
            company_name: '',
            job_title: '',
            department: '',

            date_paid: '',
            amount_paid: '',
            confirmation_number: '',
            total_amount_paid: '',

            status: '',
            submitted_nbi: '',

            benefeciaryId: ''
        },
        tableData: []
      }
    },
    computed: {
        filteredTableData() {
            const { search, tableData } = this;
            if (!search) {
                return tableData;
            } else {
                const searchLower = search.toLowerCase();
                return tableData.filter(
                (data) =>
                    data.last_name.toLowerCase().includes(searchLower) ||
                    data.first_name.toLowerCase().includes(searchLower)
                );
            }
        },
    },
    mounted() {
        this.getBeneficiaries();
    },
    methods: {
        handlePaginationChange(page) {
            this.currentPage = page;
        },
        showModal() {
            this.modalVisible = true;
        },
        resetForm() {
            // this.form = {};
        },
        async updateBeneficiary() {
            
            await axios
                .post('api/data/' + this.benefeciaryId, this.form)
                .then((response) => {
                    this.$notify({
                        message: 'Benefeciary successfully updated!',
                        type: 'success',
                    });
                    this.getBeneficiaries();
                })
                .catch((response) => {
                console.log(response);
                alert('Something went wrong!');
                });

            // After successful addition, close the modal and reset the form
            this.modalVisible = false;
        },
        async addBeneficiary() {
            await axios
                .post('api/data', this.form)
                .then((response) => {
                    this.$notify({
                        message: 'Benefeciary successfully added!',
                        type: 'success',
                    });
                    this.form = {};
                    this.getBeneficiaries();
                })
                .catch((response) => {
                console.log(response);
                alert('Something went wrong!');
                });

            // After successful addition, close the modal and reset the form
            this.modalVisible = false;
        },
        getBeneficiaries() {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            axios
                .get('api/data')
                .then((response) => {
                    this.tableData = response.data.data;
                })
                .catch((response) => {
                    console.log(response);
                    alert('Something went wrong!');
                });

            // After successful addition, close the modal and reset the form
            this.modalVisible = false;
            this.resetForm();
        },
        handleEdit(beneficiary) {
            this.handleForm(beneficiary);

          
            this.benefeciaryId = beneficiary.id;
            this.editMode = true;

            this.modalVisible = true;
        },
        handleForm(beneficiary) {
            this.form.last_name = beneficiary.last_name;
            this.form.maiden_name = beneficiary.maiden_name;
            this.form.first_name = beneficiary.first_name;
            this.form.middle_name = beneficiary.middle_name;
            this.form.name_ext = beneficiary.name_ext;
            this.form.course = beneficiary.course;
            this.form.month_year_graduated = beneficiary.month_year_graduated;
            this.form.sex = beneficiary.sex;
            this.form.comaker = beneficiary.comaker;
            this.form.hei = beneficiary.hei;
            this.form.contact_number = beneficiary.contact_number;
            this.form.address = beneficiary.address;
            this.form.email = beneficiary.email;
            //disbursement info
            this.form.principal_loan = beneficiary.disbursement_info.principal_loan;
            this.form.interest_during_repayment_period = beneficiary.disbursement_info.interest_during_repayment_period;
            this.form.penalty = beneficiary.disbursement_info.penalty;
            this.form.total_full_amortization = beneficiary.disbursement_info.total_full_amortization;
            //employment info
            this.form.company_address = beneficiary.employment_info.company_address;
            this.form.no_years_emp = beneficiary.employment_info.no_years_emp;
            this.form.first_date_employment = beneficiary.employment_info.first_date_employment;
            this.form.company_name = beneficiary.employment_info.company_name;
            this.form.job_title = beneficiary.employment_info.job_title;
            this.form.department = beneficiary.employment_info.department;
            //repayment info
            this.form.date_paid = beneficiary.repayment_info.date_paid;
            this.form.amount_paid = beneficiary.repayment_info.amount_paid;
            this.form.confirmation_number = beneficiary.repayment_info.confirmation_number;
            this.form.total_amount_paid = beneficiary.repayment_info.total_amount_paid;
            //status info
            this.form.status = beneficiary.status_info.status;
            this.form.submitted_nbi = beneficiary.status_info.submitted_nbi;
        },
        // handleDelete(beneficiary) {

        // }
    }
  }

</script>
<style scoped>
    .button-container {
        display: flex;
        justify-content: center;
    }
    .form-container {
        display: flex;
        flex-direction: column;
    }

    .form-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: -15px;
    }

    .form-item {
        flex-basis: calc(15.33% - 10px);
    }

    .custom-label {
        display: block;
        margin-bottom: 5px;
    }
</style>
