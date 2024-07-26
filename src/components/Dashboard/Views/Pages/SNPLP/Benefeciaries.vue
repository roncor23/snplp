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
                <el-dialog title="Add Status" :visible.sync="modalVisibleStatuses" width="30%">
                    <el-form ref="addStatuses" :model="form" label-width="120">
                        <el-form class="form-container">
                            <div >
                                <div>
                                    <el-input v-model="status.personal_id" hidden></el-input>

                                    <label class="custom-label"><span class="text-danger">*</span>Date</label>
                                    <el-form-item required>
                                        <el-input v-model="status.date" type="date"></el-input>
                                    </el-form-item>
                                </div>
                                <div >
                                    <label class="custom-label"><span class="text-danger">*</span>Action Taken</label>
                                    <el-form-item>
                                        <el-input v-model="status.action_taken" type="textarea"></el-input>
                                    </el-form-item>
                                </div>

                            </div>
                        </el-form>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="modalVisibleStatuses = false">Cancel</el-button>
                        <el-button type="primary" @click="addStatus">Add</el-button>
                    </span>
                </el-dialog>
                <el-dialog title="Payments" :visible.sync="modalVisiblePaymentTable" width="32%">
                    <el-table :data="payments" v-if="!paymentFlag">
                        <el-table-column width="150" property="date_paid" label="date paid"></el-table-column>
                        <el-table-column width="150" label="amount paid" v-if="!paymentFlag">
                            <template v-slot="{row}"> 
                                <p class="text-right">{{ addComma(row.amount_paid) }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column width="250" label="confirmation number">
                            <template v-slot="{row}"> 
                                <p class="text-center">{{ row.confirmation_number }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column width="170" label="action">                   
                                <template slot-scope="scope">
                                    <div class="button-container">
                                        <el-button
                                            size="mini"
                                            @click="handlePaymentEdit(scope.row)" type="primary">
                                            Edit
                                        </el-button>
                                        <el-button
                                            size="mini"
                                            @click="deletePayment(scope.row)" type="danger">
                                            Delete
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
                        <p class="text-left font-weight-bold">TOTAL PAYABLE: <span>{{ formatNumberWithCommas(outstanding_blance) }}</span></p>
                        <p class="text-left font-weight-bold">TOTAL AMOUNT PAID: <span>{{ formatNumberWithCommas(total_amount_paid) }}</span></p>
                        <p class="text-left font-weight-bold">OUTSTANDING BALANCE: <span v-if="outstanding_blance > 0">{{ (formatNumberWithCommas(outstanding_blance - Number(total_amount_paid))) }}</span></p>
                        <el-button @click="modalVisiblePaymentTable = false, paymentFlag = false" v-if="!paymentFlag">Close</el-button>
                        <el-button @click="paymentFlag = false" v-if="paymentFlag">Back</el-button>
                        <el-button type="primary" @click="updatePayment" v-if="paymentFlag">Update</el-button>
                    </span>
                </el-dialog>

                <el-dialog title="Status" :visible.sync="modalVisibleStatusTable" width="40%">
                    <el-table :data="statuses" v-if="!statusFlag">
                        <el-table-column width="150" property="date" label="date"></el-table-column>
                        <el-table-column width="450" property="action_taken" label="action taken"></el-table-column>
                        <el-table-column width="150" property="encoded_by" label="encoded by"></el-table-column>
                        <el-table-column width="170" label="action">                   
                                <template slot-scope="scope">
                                    <div class="button-container">
                                        <el-button
                                            size="mini"
                                            @click="handleStatusEdit(scope.row)" type="primary">
                                            Edit
                                        </el-button>
                                        <el-button
                                            size="mini"
                                            @click="deleteStatus(scope.row)" type="danger">
                                            Delete
                                        </el-button>
                                    </div>
                            </template>
                        </el-table-column>
                        
                    </el-table>
                    <table v-if="statusFlag">
                        <tr>
                            <th>DATE</th>
                            <th>ACTION TAKEN</th>
                            <th>ENCODED BY</th>
                        </tr>
                        <td>
                            <input v-model="status.date"  class="form-control" disabled/>
                        </td>
                        <td>
                            <input v-model="status.action_taken"  class="form-control"/>
                        </td>
                        <td>
                            <input v-model="status.encoded_by"  class="form-control" disabled/>
                        </td>
                    </table>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="modalVisibleStatusTable = false, statusFlag = false" v-if="!statusFlag">Close</el-button>
                        <el-button @click="statusFlag = false" v-if="statusFlag">Back</el-button>
                        <el-button type="primary" @click="updateStatus" v-if="statusFlag">Update</el-button>
                    </span>
                </el-dialog>
          </div>
          <div class="card-body">
            <div class="row"> 

                <div class="col-md-4 text-left ml-4"> 
                    <p v-if="beneficiariesCount"><span class="font-weight-bold">Total Beneficiaries:</span> {{ beneficiariesCount }}</p>
                    <p v-if="totalAmountPaid"><span class="font-weight-bold">Total Amount Paid:</span> {{ formatAmount(totalAmountPaid) }}</p>
                    <p v-if="totalBalance"><span class="font-weight-bold">Total Outstanding Blance:</span> {{ formatAmount(totalBalance) }}</p>
                </div>
                <div class="mb-4 col-md-7 text-right ml-4"> 
                    <el-dropdown size="small" split-button type="info" @command="handleCommandChange">
                        <span class="el-dropdown-link">{{ selectedStatus }}</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="1">Fully Paid</el-dropdown-item>
                            <el-dropdown-item command="0">Partially Paid</el-dropdown-item>
                            <el-dropdown-item command="2">No Payment</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="row ml-1 mb-1"> 
                <template>
                    <el-button
                        class="ml-2 mr-1"
                        icon="el-icon-caret-right"
                        size="mini"
                        @click="openAction" type="warning" v-if="!action"></el-button>
                        <el-button
                        class="ml-2 mr-1"
                        icon="el-icon-caret-left"
                        size="mini"
                        @click="closeAction" type="warning" v-if="action"></el-button>
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="Search last name of first name"
                        style="width: 250px;"
                    />
                    <el-button
                        class="ml-2"
                        size="mini"
                        @click="searchBenificiaries" type="primary">Search</el-button>
                </template>
            </div>
            <el-table v-loading="loading" element-loading-text="Loading data..." :data="tableData"  :lazy="true" border>
                <!-- <el-table-column label="Id" property="id" width="50"></el-table-column> -->
                <el-table-column label="Last Name" property="last_name" width="200"></el-table-column>
                <el-table-column label="Maiden Name" property="maiden_name" width="200"></el-table-column>
                <el-table-column label="First Name" property="first_name" width="200"></el-table-column>
                <el-table-column label="Middle Name" property="middle_name" width="200"></el-table-column>
                <el-table-column label="Name Ext" property="name_ext" width="150"></el-table-column>
                <el-table-column label="Sex" property="sex"></el-table-column>
                <el-table-column label="Email" property="email" width="150"></el-table-column>
                <el-table-column label="Contact #" property="contact_number" width="150"></el-table-column>
                <el-table-column label="Address" property="address" width="150"></el-table-column>
                <el-table-column label="Comaker" property="comaker" width="150"></el-table-column>
                <el-table-column label="HEI" property="hei" width="450"></el-table-column>
                <el-table-column label="Course" property="course" width="200"></el-table-column>
                <el-table-column label="Month Year Graduated" property="month_year_graduated" width="250"></el-table-column>
                <el-table-column label="1st Date of Employment" property="employment_info.first_date_employment" width="250"></el-table-column>
                <el-table-column label="Name of Company" property="employment_info.company_name" width="200"></el-table-column>
                <el-table-column label="Job Title / Occupation" property="employment_info.job_title" width="250"></el-table-column>
                <el-table-column label="Department" property="employment_info.department" width="200"></el-table-column>
                <el-table-column label="Company Address" property="employment_info.company_address" width="200"></el-table-column>
                <el-table-column label="No of Years Employed" property="employment_info.no_years_emp" width="250"></el-table-column>
                <el-table-column label="Payment Status" property="status_info.status" width="200"></el-table-column>
                <el-table-column label="NBI Status" property="status_info.submitted_nbi" width="500"></el-table-column>
                <el-table-column label="Principal Loan" width="200">
                    <template v-slot="{row}"> 
                        <p class="text-right">{{ addComma(row.disbursement_info.principal_loan) }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="Interest during Repayment Period" width="320">
                    <template v-slot="{row}"> 
                        <p class="text-right">{{ addComma(row.disbursement_info.interest_during_repayment_period) }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="Penalty" width="200">
                    <template v-slot="{row}"> 
                        <p class="text-right">{{ addComma(row.disbursement_info.penalty) }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="Total Full Amortization" width="235">
                    <template v-slot="{row}"> 
                        <p class="text-right">{{ addComma(row.disbursement_info.total_full_amortization) }}</p>
                    </template>
                </el-table-column>
                <!-- <el-table-column label="Date Paid" property="repayment_info.date_paid" width="200"></el-table-column>
                <el-table-column label="Amount Paid" property="repayment_info.amount_paid" width="200"></el-table-column>
                <el-table-column label="Confirmation Number" property="repayment_info.confirmation_number" width="220"></el-table-column> -->
                <el-table-column label="Total Amount Paid" width="200">
                    <template v-slot="{row}"> 
                        <p class="text-right">{{ addComma(row.repayment_info.total_amount_paid) }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="Outstanding Balance" width="250">
                    <template v-slot="{row}"> 
                        <p class="text-right">{{ addComma(row.repayment_info.outstanding_balance) }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Actions"
                    width="600"
                    fixed="left"
                    v-if="action"
                >
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
                            <el-button
                            size="mini"
                            type="warning"
                            @click="addStatuses(scope.row)">Add Status</el-button>
                            <el-button
                            size="mini"
                            type="info"
                            @click="viewStatus(scope.row)">View Status</el-button>

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
                class="mt-3 mb-3"
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
        selectedStatus: 'Status',
        totalAmountPaid: '',
        totalBalance: '',
        beneficiariesCount: '',
        totalItems: 866,
        currentPage: 1, // Current page
        pageSize: 10, // Number of items per page
        dropVal: 2,
        modalVisible: false,
        modalVisiblePayment: false,
        modalVisiblePaymentTable: false,
        modalVisibleStatusTable: false,
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
            personal_id: '',
            date_paid: '',
            amount_paid: '',
            confirmation_number: ''
        },
        status: {
            personal_id: '',
            date: '',
            action_taken: '',
        },
        tableData: [],
        search: '',
        payments: [],
        statuses: [],
        paymentFlag: false,
        statusFlag: false,
        total_amount_paid: '',
        outstanding_blance: '',
        loading: false,
        totalPage: 0,
        modalVisibleStatuses: false,
        action: false,
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
        openAction() {
            this.action = true;
        },
        closeAction() {
            this.action = false;
        },
        handleCommandChange(command) {
            switch (command) {
                case '1':
                this.selectedStatus = 'Fully Paid';
                this.fetchStatus(command);
                break;
                case '0':
                this.selectedStatus = 'Partially Paid';
                this.fetchStatus(command);
                break;
                case '2':
                this.selectedStatus = 'No Payment';
                this.fetchStatus(command);
                break;
                default:
                this.selectedStatus = 'Status'; // Default status text
            }
        },
        formatAmount(amount) {
            let num_parts = amount.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            return num_parts.join(".");
        },
        searchBenificiaries() {
            this.loading = true;
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            axios
                .get('api/search-beneficiaries/' + this.search)
                .then((response) => {

                    console.log("check search data", response.data);
                    this.tableData = response.data;
                    this.loading = false;
                })
                .catch((response) => {
                    console.log(response);
                    alert('Something went wrong!');
                });
        },
        addComma(amount) {
            if(amount == null) {
                return '';
            }
            let num_parts = amount.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            return num_parts.join(".");
        },
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
                    this.totalAmountPaid = response.data.totalSumPaid;
                    this.totalBalance = response.data.totalSumBalance;
                    this.beneficiariesCount = response.data.beneficiariesCount;
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
        async addStatus() {
            await axios
                .post('api/status', this.status)
                .then((response) => {
                    this.$notify({
                        message: 'Payment successfully added!',
                        type: 'success',
                    });
                    this.status = {};
                    console.log("check statususu", response);
                })
                .catch((response) => {
                console.log(response);
                alert('Something went wrong!');
                });

            // After successful addition, close the modal and reset the form
            this.modalVisibleStatuses = false;
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
        async getStatusesPerBeneficiary(id) {

            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            await axios
                .get('api/status/' + id)
                .then((response) => {
                    this.statuses = response.data.data;
                    console.log("check statuses per beneficiaries", response);

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
        async deleteStatus(status) {
            await axios
                .post('api/status-del/' + status.id)
                .then((response) => {
                    this.$notify({
                        message: response.data.message,
                        type: 'success',
                    });
                    console.log("check response", response);
                    this.getStatusesPerBeneficiary(status.personal_id); 
 
                })
                .catch((response) => {
                console.log(response);
                alert('Something went wrong!');
                });
        },
        async deletePayment(payment) {
            await axios
                .post('api/payment-del/' + payment.id)
                .then((response) => {
                    this.$notify({
                        message: response.data.message,
                        type: 'success',
                    });
                    console.log("check response", response);
                    this.getPaymentsPerBeneficiary(payment.personal_id); 
 
                })
                .catch((response) => {
                console.log(response);
                alert('Something went wrong!');
                });
        },
        handlePaymentEdit(payment) {

            this.handleFormPayment(payment);

            this.paymentFlag = true;
        },
        handleStatusEdit(status) {

            this.handleFormStatus(status);

            this.statusFlag = true;
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

        async updateStatus() {
            await axios
                .post('api/status/' + this.status.id, this.status)
                .then((response) => {
                    this.$notify({
                        message: 'Status successfully updated!',
                        type: 'success',
                    });
                    this.getStatusesPerBeneficiary(this.status.personal_id); 
                    this.statusFlag = false;
                    this.status = {};
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
        addStatuses(beneficiary) {
            this.modalVisibleStatuses = true;
            this.status.personal_id = beneficiary.id;
        },
        viewPayment(beneficiary) {
            this.getPaymentsPerBeneficiary(beneficiary.id);
            this.modalVisiblePaymentTable = true;
            // this.re_total_amount_paid = beneficiary.repayment_info.total_amount_paid;
            this.outstanding_blance = beneficiary.disbursement_info.total_full_amortization;
            console.log("check bne", beneficiary);
        },
        viewStatus(beneficiary) {
            this.getStatusesPerBeneficiary(beneficiary.id);
            this.modalVisibleStatusTable = true;
        },
        handleFormPayment(payment) {
            this.payment.id = payment.id;
            this.payment.personal_id = payment.personal_id;
            this.payment.date_paid = payment.date_paid;
            this.payment.amount_paid = payment.amount_paid;
            this.payment.confirmation_number = payment.confirmation_number;
        },
        handleFormStatus(status) {
            this.status.id = status.id;
            this.status.personal_id = status.personal_id;
            this.status.date = status.date;
            this.status.action_taken = status.action_taken;
            this.status.encoded_by = status.encoded_by;
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
