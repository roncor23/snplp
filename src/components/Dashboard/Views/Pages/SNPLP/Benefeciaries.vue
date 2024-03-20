<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <!-- <el-button type="primary" @click="showModal">Add Beneficiary</el-button> -->
                <el-dialog title="Update Beneficiary" :visible.sync="modalVisible" width="95%">
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
                                        <el-input v-model="form.month_year_graduated" type="date"></el-input>
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
                                        <el-input v-model="form.first_date_employment" type="date"></el-input>
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
                                        <el-input v-model="form.no_years_emp" type="number"></el-input>
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
                        <!-- <el-divider content-position="left">Repayments</el-divider>
                        <el-form class="form-container">
                            <div class="form-row">
                                <div class="form-item">
                                    <label class="custom-label">Date Paid</label>
                                    <el-form-item required>
                                        <el-input v-model="form.date_paid" type="date"></el-input>
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
                        </el-form> -->
                    </el-form>

                    <span slot="footer" class="dialog-footer">
                        <el-button @click="modalVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="updateBeneficiary">Update</el-button>
                    </span>
                </el-dialog>


                <el-dialog title="Add Payment" :visible.sync="modalVisiblePayment" width="30%">
                    <el-form ref="addPayment" :model="form" label-width="120">
                        <el-form class="form-container">
                            <div >
                                <div>
                                    <el-input v-model="payment.personal_id" hidden></el-input>

                                    <label class="custom-label"><span class="text-danger">*</span>Date Paid</label>
                                    <el-form-item required>
                                        <el-input v-model="payment.date_paid" type="date"></el-input>
                                    </el-form-item>
                                </div>
                                <div >
                                    <label class="custom-label"><span class="text-danger">*</span>Amount Paid</label>
                                    <el-form-item>
                                        <el-input v-model="payment.amount_paid"></el-input>
                                    </el-form-item>
                                </div>
                                <div >
                                    <label class="custom-label"><span class="text-danger">*</span>Confirmation Number</label>
                                    <el-form-item required>
                                        <el-input v-model="payment.confirmation_number"></el-input>
                                    </el-form-item>
                                </div>

                            </div>
                        </el-form>
                    </el-form>

                    <span slot="footer" class="dialog-footer">
                        <el-button @click="modalVisiblePayment = false">Cancel</el-button>
                        <el-button type="primary" @click="addPayment">Add</el-button>
                    </span>
                </el-dialog>

                <el-dialog title="Payments" :visible.sync="modalVisiblePaymentTable" width="36%">
                    <el-table :data="payments" v-if="!paymentFlag">
                        <el-table-column width="150" property="date_paid" label="date paid"></el-table-column>
                        <el-table-column width="150" property="amount_paid" label="amount paid" v-if="!paymentFlag"></el-table-column>
                        <el-table-column width="250" property="confirmation_number" label="confirmation number"></el-table-column>
                        <el-table-column width="100" label="action">                   
                                <template slot-scope="scope">
                                    <div class="button-container">
                                    <el-button
                                    size="mini"
                                    @click="handlePaymentEdit(scope.row)" type="primary">
                                    Edit
                                </el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                    <table v-if="paymentFlag">
                        <tr>
                            <th>DATE PAID</th>
                            <th>AMOUNT PAID</th>
                            <th>CONFIRMATION NUMBER</th>
                        </tr>
                        <td>
                            <input v-model="payment.date_paid"  class="form-control" disabled/>
                        </td>
                        <td>
                            <input v-model="payment.amount_paid"  class="form-control"/>
                        </td>
                        <td>
                            <input v-model="payment.confirmation_number"  class="form-control"/>
                        </td>
                    </table>
                    <span slot="footer" class="dialog-footer">
                        <p class="text-left font-weight-bold">TOTAL FULL AMORTIZATION: <span>{{ formatNumberWithCommas(outstanding_blance) }}</span></p>
                        <p class="text-left font-weight-bold">TOTAL AMOUNT PAID: <span>{{ formatNumberWithCommas(total_amount_paid + Number(re_total_amount_paid)) }}</span></p>
                        <p class="text-left font-weight-bold">OUTSTANDING BALANCE: <span v-if="outstanding_blance > 0">{{ (formatNumberWithCommas(outstanding_blance - Number(re_total_amount_paid) - Number(total_amount_paid))) }}</span></p>
                        <el-button @click="modalVisiblePaymentTable = false, paymentFlag = false" v-if="!paymentFlag">Close</el-button>
                        <el-button @click="paymentFlag = false" v-if="paymentFlag">Back</el-button>
                        <el-button type="primary" @click="updatePayment" v-if="paymentFlag">Update</el-button>
                    </span>
                </el-dialog>
          </div>
          <div class="card-body table-responsive table-full-width">
            <div class="row"> 
                <div class="ml-4 mb-4 col-md-2"> 
                    <el-dropdown size="small" split-button type="primary" @command="fetchStatus">
                        <span class="el-dropdown-link">Status</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="1">Paid</el-dropdown-item>
                            <el-dropdown-item command="0">Unpaid</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>


            <el-table v-loading="loading" element-loading-text="Loading data..." :data="filteredTableData" style="width: 100%;" :lazy="true" border>
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
                        {{ scope.row.repayment_info.outstanding_balance }}
                    </template>
                </el-table-column>
                <el-table-column
                    label="Actions"
                    width="370"
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
                            <el-button
                            size="mini"
                            type="success"
                            @click="addPayments(scope.row)">Add Payment</el-button>
                            <el-button
                            size="mini"
                            type="info"
                            @click="viewPayment(scope.row)">View Payment</el-button>
                            <!-- <el-popover
                            placement="right"
                            width="720"
                            transition="el-fade-in-linear"
                            trigger="click"
                            >
                                <el-table :data="payments">
                                    <el-table-column width="150" property="date_paid" label="date paid"></el-table-column>
                                    <el-table-column width="150" property="amount_paid" label="amount paid"></el-table-column>
                                    <el-table-column width="250" property="confirmation_number" label="confirmation number"></el-table-column>
                                    <el-table-column width="100" label="action">                   
                                         <template slot-scope="scope">
                                             <div class="button-container">
                                                <el-button
                                                size="mini"
                                                @click="handleEdit(scope.row)" type="primary">
                                                Edit
                                            </el-button>
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-button type="info" slot="reference" size="mini" class="ml-2" @click="viewPayment(scope.row)">View Payment</el-button>
                            </el-popover> -->
                        </div>


                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="totalPage"
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
  import {Table, TableColumn, Select, Button, Dialog, Form, FormItem, Input, Divider, Pagination, Popover, Dropdown, DropdownMenu, DropdownItem  } from 'element-ui'
  import 'element-ui/lib/theme-chalk/dialog.css';
  import 'element-ui/lib/theme-chalk/form.css';
  import 'element-ui/lib/theme-chalk/form-item.css';
  import 'element-ui/lib/theme-chalk/input.css';
  import 'element-ui/lib/theme-chalk/divider.css';
  import 'element-ui/lib/theme-chalk/pagination.css';
  import 'element-ui/lib/theme-chalk/dropdown.css';
  import 'element-ui/lib/theme-chalk/dropdown-menu.css';
  import 'element-ui/lib/theme-chalk/dropdown-item.css';

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
  Vue.component(Popover.name, Popover);
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(DropdownMenu.name, DropdownMenu);
  Vue.component(DropdownItem.name, DropdownItem);

  export default {
    data () {
      return {
        totalItems: 866,
        currentPage: 1, // Current page
        pageSize: 10, // Number of items per page
        dropVal: 2,
        modalVisible: false,
        modalVisiblePayment: false,
        modalVisiblePaymentTable: false,
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
        payment: {
            id: '',
            date_paid: '',
            amount_paid: '',
            confirmation_number: ''
        },
        tableData: [],
        search: '',
        payments: [],
        paymentFlag: false,
        total_amount_paid: '',
        re_total_amount_paid: '',
        outstanding_blance: '',
        loading: false,
        totalPage: 0,
      }
    },
    computed: {
        filteredTableData() {
            const { search, tableData } = this;
            if (!search) {
                return tableData;
            } else {
                const searchUpper = search.toUpperCase();
                return tableData.filter(
                (data) =>
                    data.last_name.toUpperCase().includes(searchUpper) ||
                    data.first_name.toUpperCase().includes(searchUpper)
                );
            }
        },
    },
    mounted() {
        this.getBeneficiaries(this.currentPage);
    },
    methods: {
        fetchStatus(val, page) {
            page = this.currentPage;
            this.loading = true;
            this.dropVal = val;
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            axios
                .get('api/status-data/' + Number(val) + '/' + Number(page))
                .then((response) => {
                    this.tableData = response.data.data;
                    this.totalPage = response.data.meta.total;
                    console.log("check tableData", this.tableData);
                    this.loading = false;
                })
                .catch((response) => {
                    console.log(response);
                    alert('Something went wrong!');
                });

            // After successful addition, close the modal and reset the form
            this.modalVisible = false;
        },
        handlePaginationChange(page) {
            this.currentPage = page;
            if(this.dropVal == 1 || this.dropVal == 0) {
                this.fetchStatus(this.dropVal, page);
                return;
            } else {
                this.getBeneficiaries(page);
            }
           
        },
        formatNumberWithCommas(number) {
            // Convert the number to a string
            var numberString = number.toString();

            // Split the number string into an array of characters
            var numberArray = numberString.split('');

            // Determine the position to start adding commas
            var commaPosition = numberArray.length - 3;

            // Iterate over the number array in reverse order and add commas every three digits
            while (commaPosition > 0) {
                numberArray.splice(commaPosition, 0, ',');
                commaPosition -= 3;
            }

            // Join the number array back into a string
            var formattedNumber = numberArray.join('');

            // Return the formatted number
            return formattedNumber;
            },
        async updateBeneficiary() {
            
            await axios
                .post('api/data/' + this.benefeciaryId, this.form)
                .then((response) => {
                    this.$notify({
                        message: 'Benefeciary successfully updated!',
                        type: 'success',
                    });
                    this.getBeneficiaries(this.currentPage);
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
                    this.getBeneficiaries(this.currentPage);
                })
                .catch((response) => {
                console.log(response);
                alert('Something went wrong!');
                });

            // After successful addition, close the modal and reset the form
            this.modalVisible = false;
        },
        async addPayment() {
            await axios
                .post('api/payment', this.payment)
                .then((response) => {
                    this.$notify({
                        message: 'Payment successfully added!',
                        type: 'success',
                    });
                    this.payment = {};
                    // this.getBeneficiaries();
                })
                .catch((response) => {
                console.log(response);
                alert('Something went wrong!');
                });

            // After successful addition, close the modal and reset the form
            this.modalVisiblePayment = false;
        },
        getBeneficiaries(page) {
            this.loading = true;
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            axios
                .get('api/data/' + page)
                .then((response) => {
                    this.tableData = response.data.data;
                    this.totalPage = response.data.meta.total;
                    console.log("check tableData", this.tableData);
                    this.loading = false;
                })
                .catch((response) => {
                    console.log(response);
                    alert('Something went wrong!');
                });

            // After successful addition, close the modal and reset the form
            this.modalVisible = false;
        },
        async getPaymentsPerBeneficiary(id) {

            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            await axios
                .get('api/payment/' + id)
                .then((response) => {
                    this.payments = response.data.data;

                    let len = this.payments.length;
                    let sum = 0;
                    for(let i = 0; i < len; i++) {
                        sum += Number(this.payments[i].amount_paid);
                    }
                    this.total_amount_paid = sum;
                })
                .catch((response) => {
                    console.log(response);
                    alert('Something went wrong!');
                });

            // After successful addition, close the modal and reset the form
            this.modalVisible = false;
        },
        handleEdit(beneficiary) {
            this.handleForm(beneficiary);

            this.benefeciaryId = beneficiary.id;

            this.modalVisible = true;
        },
        handlePaymentEdit(payment) {

            this.handleFormPayment(payment);

            this.paymentFlag = true;
        },
       async updatePayment() {
            await axios
                .post('api/payment/' + this.payment.id, this.payment)
                .then((response) => {
                    this.$notify({
                        message: 'Payment successfully updated!',
                        type: 'success',
                    });
                    this.getPaymentsPerBeneficiary(this.payment.personal_id); 
                    this.paymentFlag = false;
                    this.payment = {};
                })
                .catch((response) => {
                console.log(response);
                alert('Something went wrong!');
                });
        },

        addPayments(beneficiary) {
            this.modalVisiblePayment = true;
            this.payment.personal_id = beneficiary.id;
        },
        viewPayment(beneficiary) {
            this.getPaymentsPerBeneficiary(beneficiary.id);
            this.modalVisiblePaymentTable = true;
            this.re_total_amount_paid = beneficiary.repayment_info.total_amount_paid;
            this.outstanding_blance = beneficiary.disbursement_info.total_full_amortization;
            console.log("check bne", beneficiary);
        },
        handleFormPayment(payment) {
            this.payment.id = payment.id;
            this.payment.personal_id = payment.personal_id;
            this.payment.date_paid = payment.date_paid;
            this.payment.amount_paid = payment.amount_paid;
            this.payment.confirmation_number = payment.confirmation_number;
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
