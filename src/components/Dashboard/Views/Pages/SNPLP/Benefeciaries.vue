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
                                <div class="form-item">
                                    <label class="custom-label">Award Number</label>
                                    <el-form-item>
                                        <el-input v-model="form.award_number"></el-input>
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
                        <p class="text-left font-weight-bold">TOTAL PAYABLE: <span>{{ formatAmount(outstanding_blance) }}</span></p>
                        <p class="text-left font-weight-bold">TOTAL AMOUNT PAID: <span>{{ formatAmount(total_amount_paid) }}</span></p>
                        <p class="text-left font-weight-bold">OUTSTANDING BALANCE: <span v-if="outstanding_blance > 0">{{ formatAmount(Math.round((outstanding_blance - Number(total_amount_paid)) * 100) / 100) }}</span></p>
                        <el-button @click="modalVisiblePaymentTable = false, paymentFlag = false" v-if="!paymentFlag">Close</el-button>
                        <el-button @click="paymentFlag = false" v-if="paymentFlag">Back</el-button>
                        <el-button type="primary" @click="updatePayment" v-if="paymentFlag">Update</el-button>
                    </span>
                </el-dialog>

                <el-dialog title="Confirm Interest Calculation" :visible.sync="modalVisibleConfirmCalculateAll" width="400px">
                    <div style="text-align: center; padding: 20px 0;">
                        <i class="el-icon-warning" style="font-size: 48px; color: #E6A23C; margin-bottom: 15px;"></i>
                        <p style="font-size: 16px; margin-bottom: 10px;">
                            Are you sure you want to calculate interest for all beneficiaries?
                        </p>
                        <p style="font-size: 14px; color: #909399;">
                            This may take a few moments.
                        </p>
                    </div>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="modalVisibleConfirmCalculateAll = false">Cancel</el-button>
                        <el-button type="warning" @click="confirmCalculateInterestForAll">Confirm</el-button>
                    </div>
                </el-dialog>
                <el-dialog title="Confirm Interest Calculation" :visible.sync="modalVisibleConfirmCalculateSingle" width="400px">
                    <div style="text-align: center; padding: 20px 0;">
                        <i class="el-icon-warning" style="font-size: 48px; color: #E6A23C; margin-bottom: 15px;"></i>
                        <p style="font-size: 16px; margin-bottom: 10px;">
                            Are you sure you want to calculate interest for
                        </p>
                        <p style="font-size: 16px; font-weight: bold; margin-bottom: 10px; color: #303133;">
                            {{ selectedBeneficiaryForInterest ? selectedBeneficiaryForInterest.first_name + ' ' + selectedBeneficiaryForInterest.last_name : 'this beneficiary' }}?
                        </p>
                        <p style="font-size: 14px; color: #909399;">
                            Interest will be calculated at 6% per annum based on the outstanding balance.
                        </p>
                    </div>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="modalVisibleConfirmCalculateSingle = false">Cancel</el-button>
                        <el-button type="warning" @click="confirmCalculateInterest">Confirm</el-button>
                    </div>
                </el-dialog>
                <el-dialog title="Interest Calculation" :visible.sync="modalVisibleInterest" width="50%">
                    <div v-if="calculating" class="text-center">
                        <i class="el-icon-loading" style="font-size: 24px;"></i>
                        <p>Calculating interest...</p>
                    </div>
                    <div v-else-if="interestResult">
                        <el-alert
                            :title="interestResult.success ? 'Success' : (interestResult.isDuplicate ? 'Already Calculated' : 'Error')"
                            :type="interestResult.success ? 'success' : (interestResult.isDuplicate ? 'warning' : 'error')"
                            :description="interestResult.message"
                            show-icon
                            :closable="false"
                            class="mb-3">
                        </el-alert>
                        <div v-if="interestResult.success && interestResult.data">
                            <el-table :data="[interestResult.data]" border>
                                <el-table-column prop="beneficiary_name" label="Beneficiary Name" width="200"></el-table-column>
                                <el-table-column prop="personal_id" label="Personal ID" width="120"></el-table-column>
                                <el-table-column label="Outstanding Balance" width="150">
                                    <template slot-scope="scope">
                                        ₱{{ formatAmount(scope.row.outstanding_balance) }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="Interest Rate" width="130">
                                    <template slot-scope="scope">
                                        6% per annum
                                    </template>
                                </el-table-column>
                                <el-table-column label="Calculated Interest" width="150">
                                    <template slot-scope="scope">
                                        ₱{{ formatAmount(scope.row.calculated_interest) }}
                                    </template>
                                </el-table-column>
                                <el-table-column prop="calculation_date" label="Calculation Date" width="150"></el-table-column>
                                <el-table-column prop="period" label="Period" width="100"></el-table-column>
                                <el-table-column prop="notes" label="Notes" show-overflow-tooltip></el-table-column>
                            </el-table>
                        </div>
                        <div v-else-if="interestResult.isDuplicate && interestResult.existing_calculation" class="mt-3">
                            <h4 style="margin-bottom: 15px; color: #E6A23C;">Existing Calculation Details:</h4>
                            <el-table :data="[interestResult.existing_calculation]" border>
                                <el-table-column prop="calculation_date" label="Calculation Date" width="150"></el-table-column>
                                <el-table-column prop="period" label="Period" width="100"></el-table-column>
                                <el-table-column label="Calculated Interest" width="150">
                                    <template slot-scope="scope">
                                        ₱{{ formatAmount(scope.row.calculated_interest) }}
                                    </template>
                                </el-table-column>
                                <el-table-column prop="created_at" label="Created At" width="180">
                                    <template slot-scope="scope">
                                        {{ formatDate(scope.row.created_at) }}
                                    </template>
                                </el-table-column>
                            </el-table>
                            <p class="mt-3" style="color: #909399; font-size: 14px;">
                                <i class="el-icon-info"></i> Interest has already been calculated for this beneficiary in the period <strong>{{ interestResult.existing_calculation.period }}</strong>. 
                                To view all calculations, click the "Interest History" button.
                            </p>
                        </div>
                    </div>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="modalVisibleInterest = false">Close</el-button>
                    </div>
                </el-dialog>
                <el-dialog title="Interest Calculation (All Beneficiaries)" :visible.sync="modalVisibleInterestAll" width="60%">
                    <div v-if="calculatingAll" class="text-center">
                        <i class="el-icon-loading" style="font-size: 24px;"></i>
                        <p>Calculating interest for all beneficiaries...</p>
                    </div>
                    <div v-else-if="interestAllResult">
                        <el-alert
                            :title="interestAllResult.success ? 'Success' : 'Error'"
                            :type="interestAllResult.success ? 'success' : 'error'"
                            :description="interestAllResult.message"
                            show-icon
                            :closable="false"
                            class="mb-3">
                        </el-alert>
                        <div v-if="interestAllResult.success && interestAllResult.summary">
                            <div class="mb-3" style="padding: 15px; background-color: #f5f7fa; border-radius: 4px;">
                                <p><strong>Total Processed:</strong> {{ interestAllResult.summary.total_processed }}</p>
                                <p><strong>Successful:</strong> {{ interestAllResult.summary.successful }}</p>
                                <p><strong>Skipped:</strong> {{ interestAllResult.summary.skipped }}</p>
                                <p v-if="interestAllResult.summary.already_calculated !== undefined">
                                    <strong>Already Calculated:</strong> {{ interestAllResult.summary.already_calculated }}
                                </p>
                            </div>
                            <el-table :data="interestAllResult.data" border max-height="400" v-if="interestAllResult.data && interestAllResult.data.length > 0">
                                <el-table-column prop="beneficiary_name" label="Beneficiary" width="200"></el-table-column>
                                <el-table-column prop="outstanding_balance" label="Outstanding Balance" width="150">
                                    <template slot-scope="scope">
                                        ₱{{ formatAmount(scope.row.outstanding_balance) }}
                                    </template>
                                </el-table-column>
                                <el-table-column prop="calculated_interest" label="Calculated Interest" width="150">
                                    <template slot-scope="scope">
                                        <span v-if="scope.row.calculated_interest">₱{{ formatAmount(scope.row.calculated_interest) }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="status" label="Status" width="250" show-overflow-tooltip></el-table-column>
                                <el-table-column label="Existing Calculation ID" width="180" v-if="interestAllResult.data && interestAllResult.data.some(item => item.existing_calculation_id)">
                                    <template slot-scope="scope">
                                        <span v-if="scope.row.existing_calculation_id">ID: {{ scope.row.existing_calculation_id }}</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="modalVisibleInterestAll = false">Close</el-button>
                    </div>
                </el-dialog>
                <el-dialog title="Confirm Delete Beneficiary" :visible.sync="modalVisibleConfirmDelete" width="400px">
                    <div style="text-align: center; padding: 20px 0;">
                        <i class="el-icon-warning" style="font-size: 48px; color: #F56C6C; margin-bottom: 15px;"></i>
                        <p style="font-size: 16px; margin-bottom: 10px;">
                            Are you sure you want to delete this beneficiary?
                        </p>
                        <p style="font-size: 16px; font-weight: bold; margin-bottom: 10px; color: #303133;">
                            {{ selectedBeneficiaryForDelete ? selectedBeneficiaryForDelete.first_name + ' ' + selectedBeneficiaryForDelete.last_name : '' }}
                        </p>
                        <p style="font-size: 14px; color: #909399;">
                            This action cannot be undone. All associated data (payments, statuses, interest calculations) will also be deleted.
                        </p>
                    </div>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="modalVisibleConfirmDelete = false">Cancel</el-button>
                        <el-button type="danger" @click="confirmDeleteBeneficiary">Delete</el-button>
                    </div>
                </el-dialog>
                <el-dialog title="Interest History" :visible.sync="modalVisibleInterestHistory" width="70%">
                    <div v-if="loadingInterestHistory" class="text-center">
                        <i class="el-icon-loading" style="font-size: 24px;"></i>
                        <p>Loading interest history...</p>
                    </div>
                    <div v-else>
                        <el-table :data="interestHistory" border v-if="interestHistory && interestHistory.length > 0">
                            <el-table-column prop="calculation_date" label="Calculation Date" width="150"></el-table-column>
                            <el-table-column prop="period" label="Period" width="120"></el-table-column>
                            <el-table-column prop="outstanding_balance" label="Outstanding Balance" width="150">
                                <template slot-scope="scope">
                                    ₱{{ formatAmount(scope.row.outstanding_balance) }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="interest_rate" label="Interest Rate" width="120">
                                <template slot-scope="scope">
                                    {{ scope.row.interest_rate }}%
                                </template>
                            </el-table-column>
                            <el-table-column prop="calculated_interest" label="Calculated Interest" width="150">
                                <template slot-scope="scope">
                                    ₱{{ formatAmount(scope.row.calculated_interest) }}
                                </template>
                            </el-table-column>
                            <el-table-column prop="notes" label="Notes" show-overflow-tooltip></el-table-column>
                            <el-table-column prop="created_at" label="Created At" width="180">
                                <template slot-scope="scope">
                                    {{ formatDate(scope.row.created_at) }}
                                </template>
                            </el-table-column>
                        </el-table>
                        <div v-else class="text-center" style="padding: 40px;">
                            <i class="el-icon-info" style="font-size: 48px; color: #909399;"></i>
                            <p style="margin-top: 16px; color: #909399;">No interest calculations found</p>
                        </div>
                    </div>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="modalVisibleInterestHistory = false">Close</el-button>
                    </div>
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
            <div class="row ml-1 mb-1" style="flex-wrap: wrap; align-items: center;"> 
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
                        style="width: 250px; margin: 0 8px;"
                    />
                    <el-button
                        class="ml-2"
                        size="mini"
                        @click="searchBenificiaries" type="primary">Search</el-button>
                    <el-button
                        class="ml-2"
                        size="mini"
                        icon="el-icon-download"
                        @click="exportToCSV" type="success" :loading="exporting">Export CSV</el-button>
                    <!-- <el-button
                        class="ml-2"
                        size="mini"
                        icon="el-icon-calculator"
                        @click="calculateInterestForAll" type="warning" :loading="calculatingAll">Calculate Interest (All)</el-button> -->
                </template>
            </div>
            <el-table v-loading="loading" element-loading-text="Loading data..." :data="tableData"  :lazy="true" border>
                <!-- <el-table-column label="Id" property="id" width="50"></el-table-column> -->
                <el-table-column label="Total Amount Paid" width="200">
                    <template v-slot="{row}"> 
                        <p class="text-right">{{ addComma(getTotalAmountPaid(row.id)) }}</p>
                    </template>
                </el-table-column>
                 <el-table-column label="Award #" property="award_number" width="200"></el-table-column>
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
                <el-table-column
                    label="Actions"
                    width="800"
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
                            <el-button
                            size="mini"
                            type="warning"
                            icon="el-icon-calculator"
                            @click="calculateInterest(scope.row)">Calculate Interest</el-button>
                            <el-button
                            size="mini"
                            type="info"
                            icon="el-icon-view"
                            @click="viewInterestHistory(scope.row)">Interest History</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            icon="el-icon-document"
                            @click="generatePDF(scope.row)">Generate PDF</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            icon="el-icon-delete"
                            @click="handleDelete(scope.row)">Delete</el-button>

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
  import {Table, TableColumn, Select, Button, Dialog, Form, FormItem, Input, Divider, Pagination, Popover, Dropdown, DropdownMenu, DropdownItem, Alert  } from 'element-ui'
  import jsPDF from 'jspdf'
  import 'element-ui/lib/theme-chalk/dialog.css';
  import 'element-ui/lib/theme-chalk/form.css';
  import 'element-ui/lib/theme-chalk/form-item.css';
  import 'element-ui/lib/theme-chalk/input.css';
  import 'element-ui/lib/theme-chalk/divider.css';
  import 'element-ui/lib/theme-chalk/pagination.css';
  import 'element-ui/lib/theme-chalk/dropdown.css';
  import 'element-ui/lib/theme-chalk/dropdown-menu.css';
  import 'element-ui/lib/theme-chalk/dropdown-item.css';
  import 'element-ui/lib/theme-chalk/alert.css';

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
  Vue.component(Alert.name, Alert);

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
            award_number: '',

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
        exporting: false,
        modalVisibleInterest: false,
        modalVisibleInterestAll: false,
        modalVisibleInterestHistory: false,
        modalVisibleConfirmCalculateAll: false,
        modalVisibleConfirmCalculateSingle: false,
        calculating: false,
        calculatingAll: false,
        interestResult: null,
        interestAllResult: null,
        interestHistory: [],
        loadingInterestHistory: false,
        selectedBeneficiaryForInterest: null,
        modalVisibleConfirmDelete: false,
        selectedBeneficiaryForDelete: null,
        paymentTotalsCache: {}, // Cache to store total amount paid for each beneficiary
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
        async searchBenificiaries() {
            this.loading = true;
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            try {
                const response = await axios.get('api/search-beneficiaries/' + this.search);
                console.log("check search data", response.data);
                this.tableData = response.data;
                
                // Initialize cache with repayment_info values as fallback
                this.tableData.forEach(beneficiary => {
                    const fallbackTotal = beneficiary.repayment_info?.total_amount_paid || 0;
                    this.$set(this.paymentTotalsCache, beneficiary.id, fallbackTotal);
                });
                
                // Fetch and cache actual payment totals for search results
                await this.fetchPaymentTotalsForPage();
                
                this.loading = false;
            } catch (response) {
                console.log(response);
                alert('Something went wrong!');
                this.loading = false;
            }
        },
        addComma(amount) {
            if(amount == null) {
                return '';
            }
            let num_parts = amount.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            return num_parts.join(".");
        },
        async fetchStatus(val, page) {
            page = this.currentPage;
            this.loading = true;
            this.dropVal = val;
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            try {
                const response = await axios.get('api/status-data/' + Number(val) + '/' + Number(page));
                this.tableData = response.data.data;
                this.totalPage = response.data.meta.total;
                this.totalAmountPaid = response.data.totalSumPaid;
                this.totalBalance = response.data.totalSumBalance;
                this.beneficiariesCount = response.data.beneficiariesCount;
                console.log("check tableData", this.tableData);
                
                // Initialize cache with repayment_info values as fallback
                this.tableData.forEach(beneficiary => {
                    const fallbackTotal = beneficiary.repayment_info?.total_amount_paid || 0;
                    this.$set(this.paymentTotalsCache, beneficiary.id, fallbackTotal);
                });
                
                // Fetch and cache actual payment totals for all beneficiaries on this page
                await this.fetchPaymentTotalsForPage();
                
                this.loading = false;
            } catch (response) {
                console.log(response);
                alert('Something went wrong!');
                this.loading = false;
            }

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
            const personalId = this.payment.personal_id;
            await axios
                .post('api/payment', this.payment)
                .then(async (response) => {
                    this.$notify({
                        message: 'Payment successfully added!',
                        type: 'success',
                    });
                    // Refresh payment total for this beneficiary
                    if (personalId) {
                        await this.refreshPaymentTotal(personalId);
                    }
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
        async getBeneficiaries(page) {
            this.loading = true;
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
            try {
                const response = await axios.get('api/data/' + page);
                this.tableData = response.data.data;
                this.totalPage = response.data.meta.total;
                console.log("check tableData", this.tableData);
                
                // Initialize cache with repayment_info values as fallback
                this.tableData.forEach(beneficiary => {
                    const fallbackTotal = beneficiary.repayment_info?.total_amount_paid || 0;
                    this.$set(this.paymentTotalsCache, beneficiary.id, fallbackTotal);
                });
                
                // Fetch and cache actual payment totals for all beneficiaries on this page
                await this.fetchPaymentTotalsForPage();
                
                this.loading = false;
            } catch (response) {
                console.log(response);
                alert('Something went wrong!');
                this.loading = false;
            }

            // After successful addition, close the modal and reset the form
            this.modalVisible = false;
        },
        async fetchPaymentTotalsForPage() {
            // Fetch payment totals for all beneficiaries on the current page
            const promises = this.tableData.map(async (beneficiary) => {
                try {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
                    const paymentResponse = await axios.get('api/payment/' + beneficiary.id);
                    if (paymentResponse.data && paymentResponse.data.data) {
                        const payments = paymentResponse.data.data;
                        // Use the same calculation logic as getPaymentsPerBeneficiary
                        let len = payments.length;
                        let sum = 0;
                        for(let i = 0; i < len; i++) {
                            sum += Number(payments[i].amount_paid || 0);
                        }
                        // Use Vue.set for reactivity
                        this.$set(this.paymentTotalsCache, beneficiary.id, sum);
                    } else {
                        this.$set(this.paymentTotalsCache, beneficiary.id, 0);
                    }
                } catch (error) {
                    console.warn(`Could not fetch payments for beneficiary ${beneficiary.id}:`, error);
                    this.$set(this.paymentTotalsCache, beneficiary.id, 0);
                }
            });
            
            await Promise.all(promises);
        },
        getTotalAmountPaid(beneficiaryId) {
            // Return cached total if available
            if (this.paymentTotalsCache[beneficiaryId] !== undefined) {
                return this.paymentTotalsCache[beneficiaryId];
            }
            // Return 0 if not in cache yet (will be updated when fetchPaymentTotalsForPage completes)
            return 0;
        },
        async refreshPaymentTotal(beneficiaryId) {
            // Refresh payment total for a specific beneficiary
            try {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
                const paymentResponse = await axios.get('api/payment/' + beneficiaryId);
                if (paymentResponse.data && paymentResponse.data.data) {
                    const payments = paymentResponse.data.data;
                    // Use the same calculation logic as getPaymentsPerBeneficiary
                    let len = payments.length;
                    let sum = 0;
                    for(let i = 0; i < len; i++) {
                        sum += Number(payments[i].amount_paid || 0);
                    }
                    // Use Vue.set for reactivity
                    this.$set(this.paymentTotalsCache, beneficiaryId, sum);
                } else {
                    this.$set(this.paymentTotalsCache, beneficiaryId, 0);
                }
            } catch (error) {
                console.warn(`Could not refresh payment total for beneficiary ${beneficiaryId}:`, error);
                this.$set(this.paymentTotalsCache, beneficiaryId, 0);
            }
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
                .then(async (response) => {
                    this.$notify({
                        message: response.data.message,
                        type: 'success',
                    });
                    console.log("check response", response);
                    this.getPaymentsPerBeneficiary(payment.personal_id);
                    // Refresh payment total for this beneficiary
                    if (payment.personal_id) {
                        await this.refreshPaymentTotal(payment.personal_id);
                    }
 
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
            const personalId = this.payment.personal_id;
            await axios
                .post('api/payment/' + this.payment.id, this.payment)
                .then(async (response) => {
                    this.$notify({
                        message: 'Payment successfully updated!',
                        type: 'success',
                    });
                    this.getPaymentsPerBeneficiary(personalId);
                    // Refresh payment total for this beneficiary
                    if (personalId) {
                        await this.refreshPaymentTotal(personalId);
                    }
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
            this.form.award_number = beneficiary.award_number || '';
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
        async exportToCSV() {
            this.exporting = true;
            try {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
                
                // Call the export-csv API endpoint
                const response = await axios.get('api/export-csv', {
                    responseType: 'blob' // Important: handle binary data
                });
                
                // Create a blob from the response
                const blob = new Blob([response.data], { type: 'text/csv;charset=utf-8;' });
                
                // Create a download link
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `beneficiaries_with_payments_${new Date().toISOString().split('T')[0]}.csv`);
                document.body.appendChild(link);
                link.click();
                
                // Clean up
                link.remove();
                window.URL.revokeObjectURL(url);
                
                this.$notify({
                    message: 'CSV exported successfully!',
                    type: 'success',
                });
            } catch (error) {
                console.error('Error exporting CSV:', error);
                this.$notify({
                    message: 'Error exporting CSV. Please try again.',
                    type: 'error',
                });
            } finally {
                this.exporting = false;
            }
        },
        calculateInterest(beneficiary) {
            // Store beneficiary for confirmation modal
            this.selectedBeneficiaryForInterest = beneficiary;
            // Open confirmation modal
            this.modalVisibleConfirmCalculateSingle = true;
        },
        async confirmCalculateInterest() {
            // Close confirmation modal
            this.modalVisibleConfirmCalculateSingle = false;
            
            // Proceed with calculation
            const beneficiary = this.selectedBeneficiaryForInterest;
            this.calculating = true;
            this.modalVisibleInterest = true;
            this.interestResult = null;

            try {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
                
                const currentDate = new Date().toISOString().split('T')[0];
                const currentYear = new Date().getFullYear().toString();

                const response = await axios.post('api/interest/calculate', {
                    personal_id: beneficiary.id,
                    calculation_date: currentDate,
                    period: currentYear,
                    notes: `Interest calculation for ${beneficiary.first_name} ${beneficiary.last_name}`
                });

                this.interestResult = response.data;
                
                if (response.data.success) {
                    this.$notify({
                        message: 'Interest calculated successfully!',
                        type: 'success',
                    });
                    // Refresh the beneficiaries list to show updated data
                    this.getBeneficiaries(this.currentPage);
                }
            } catch (error) {
                console.error('Error calculating interest:', error);
                
                // Handle 409 Conflict - Duplicate calculation
                if (error.response?.status === 409) {
                    this.interestResult = {
                        success: false,
                        message: error.response?.data?.message || 'Interest has already been calculated for this period.',
                        existing_calculation: error.response?.data?.existing_calculation || null,
                        isDuplicate: true
                    };
                    this.$notify({
                        message: error.response?.data?.message || 'Interest has already been calculated for this period.',
                        type: 'warning',
                        duration: 5000
                    });
                } else {
                    // Handle other errors (400, 422, 500, etc.)
                    this.interestResult = {
                        success: false,
                        message: error.response?.data?.message || 'Error calculating interest. Please try again.',
                        isDuplicate: false
                    };
                    this.$notify({
                        message: error.response?.data?.message || 'Error calculating interest. Please try again.',
                        type: 'error',
                    });
                }
            } finally {
                this.calculating = false;
            }
        },
        calculateInterestForAll() {
            // Open confirmation modal instead of using confirm()
            this.modalVisibleConfirmCalculateAll = true;
        },
        async confirmCalculateInterestForAll() {
            // Close confirmation modal
            this.modalVisibleConfirmCalculateAll = false;
            
            // Proceed with calculation
            this.calculatingAll = true;
            this.modalVisibleInterestAll = true;
            this.interestAllResult = null;

            try {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
                
                const currentDate = new Date().toISOString().split('T')[0];
                const currentYear = new Date().getFullYear().toString();

                const response = await axios.post('api/interest/calculate-all', {
                    calculation_date: currentDate,
                    period: currentYear
                });

                this.interestAllResult = response.data;
                
                if (response.data.success) {
                    this.$notify({
                        message: response.data.message,
                        type: 'success',
                    });
                    // Refresh the beneficiaries list to show updated data
                    this.getBeneficiaries(this.currentPage);
                }
            } catch (error) {
                console.error('Error calculating interest for all:', error);
                this.interestAllResult = {
                    success: false,
                    message: error.response?.data?.message || 'Error calculating interest for all beneficiaries. Please try again.'
                };
                this.$notify({
                    message: error.response?.data?.message || 'Error calculating interest for all beneficiaries. Please try again.',
                    type: 'error',
                });
            } finally {
                this.calculatingAll = false;
            }
        },
        async viewInterestHistory(beneficiary) {
            this.selectedBeneficiaryForInterest = beneficiary;
            this.loadingInterestHistory = true;
            this.modalVisibleInterestHistory = true;
            this.interestHistory = [];

            try {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
                
                const response = await axios.get(`api/interest/${beneficiary.id}`);

                if (response.data.success) {
                    this.interestHistory = response.data.data || [];
                } else {
                    this.interestHistory = [];
                }
            } catch (error) {
                console.error('Error loading interest history:', error);
                this.interestHistory = [];
                this.$notify({
                    message: 'Error loading interest history. Please try again.',
                    type: 'error',
                });
            } finally {
                this.loadingInterestHistory = false;
            }
        },
        formatDate(dateString) {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });
        },
        formatCurrency(amount) {
            if (!amount) return '0.00';
            const num = parseFloat(amount);
            return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },
        numberToWords(amount) {
            // Number to words converter
            const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 
                          'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
            const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
            
            let num = Math.floor(amount);
            const cents = Math.round((amount - num) * 100);
            
            if (num === 0) return 'Zero Pesos Only';
            
            let words = '';
            
            // Handle millions
            if (num >= 1000000) {
                const millions = Math.floor(num / 1000000);
                if (millions >= 100) {
                    words += ones[Math.floor(millions / 100)] + ' Hundred ';
                    const remainder = millions % 100;
                    if (remainder >= 20) {
                        words += tens[Math.floor(remainder / 10)] + ' ' + ones[remainder % 10] + ' ';
                    } else if (remainder > 0) {
                        words += ones[remainder] + ' ';
                    }
                } else if (millions >= 20) {
                    words += tens[Math.floor(millions / 10)] + ' ' + ones[millions % 10] + ' ';
                } else if (millions > 0) {
                    words += ones[millions] + ' ';
                }
                words += 'Million ';
                num = num % 1000000;
            }
            
            // Handle thousands
            if (num >= 1000) {
                const thousands = Math.floor(num / 1000);
                if (thousands >= 100) {
                    words += ones[Math.floor(thousands / 100)] + ' Hundred ';
                    const remainder = thousands % 100;
                    if (remainder >= 20) {
                        words += tens[Math.floor(remainder / 10)] + ' ' + ones[remainder % 10] + ' ';
                    } else if (remainder > 0) {
                        words += ones[remainder] + ' ';
                    }
                } else if (thousands >= 20) {
                    words += tens[Math.floor(thousands / 10)] + ' ' + ones[thousands % 10] + ' ';
                } else if (thousands > 0) {
                    words += ones[thousands] + ' ';
                }
                words += 'Thousand ';
                num = num % 1000;
            }
            
            // Handle hundreds
            if (num >= 100) {
                words += ones[Math.floor(num / 100)] + ' Hundred ';
                num = num % 100;
            }
            
            // Handle tens and ones
            if (num >= 20) {
                words += tens[Math.floor(num / 10)] + ' ';
                num = num % 10;
            }
            
            if (num > 0) {
                words += ones[num] + ' ';
            }
            
            words += 'Pesos';
            
            if (cents > 0) {
                words += ' and ' + cents + ' Centavos';
            }
            
            return words + ' Only';
        },
        async generatePDF(beneficiary) {
            try {
                // Fetch payments to calculate accurate outstanding balance
                let totalAmountPaid = 0;
                try {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
                    const paymentResponse = await axios.get('api/payment/' + beneficiary.id);
                    if (paymentResponse.data && paymentResponse.data.data) {
                        const payments = paymentResponse.data.data;
                        totalAmountPaid = payments.reduce((sum, payment) => {
                            return sum + Number(payment.amount_paid || 0);
                        }, 0);
                    }
                } catch (error) {
                    console.warn('Could not fetch payments, using repayment_info total:', error);
                    // Fallback to repayment_info if API call fails
                    totalAmountPaid = beneficiary.repayment_info?.total_amount_paid || 0;
                }
                
                const doc = new jsPDF();
                const pageWidth = doc.internal.pageSize.getWidth();
                const pageHeight = doc.internal.pageSize.getHeight();
                let yPos = 0;
                
                // Helper function to add text with word wrap
                const addText = (text, x, y, maxWidth, fontSize = 10, align = 'left') => {
                    doc.setFontSize(fontSize);
                    const lineHeight = fontSize * 0.5; // Better line spacing
                    
                    if (align === 'justify') {
                        // For justify, pass full text string and let jsPDF handle wrapping and justification
                        // First calculate line count for height
                        const lines = doc.splitTextToSize(text, maxWidth);
                        // Render with justify - jsPDF will wrap and justify automatically
                        doc.text(text, x, y, {
                            align: 'justify',
                            maxWidth: maxWidth
                        });
                        // Return new y position based on calculated line count
                        return y + (lines.length * lineHeight);
                    } else {
                        // For other alignments, use the standard approach
                        const lines = doc.splitTextToSize(text, maxWidth);
                        lines.forEach((line, index) => {
                            doc.text(line, x, y + (index * lineHeight), { align: align });
                        });
                        return y + (lines.length * lineHeight);
                    }
                };
                
                // Load and add CHED header image
                try {
                    const headerUrl = '/img/header.png';
                    const headerImg = new Image();
                    headerImg.crossOrigin = 'anonymous';
                    
                    await new Promise((resolve, reject) => {
                        headerImg.onload = () => {
                            try {
                                // Add header image to PDF (full width, maintain aspect ratio)
                                const headerWidth = pageWidth; // Full width
                                const headerHeight = (headerImg.height / headerImg.width) * headerWidth;
                                const headerX = 0; // No margin - full width
                                doc.addImage(headerImg, 'PNG', headerX, yPos, headerWidth, headerHeight);
                                yPos += headerHeight + 5;
                                resolve();
                            } catch (error) {
                                console.warn('Could not add header to PDF:', error);
                                resolve(); // Continue without header
                            }
                        };
                        headerImg.onerror = () => {
                            console.warn('Could not load header image');
                            resolve(); // Continue without header
                        };
                        headerImg.src = headerUrl;
                    });
                } catch (error) {
                    console.warn('Error loading header:', error);
                }
                
                
                // Date
                const today = new Date();
                const dateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                doc.setFontSize(10);
                doc.text(dateStr, 20, yPos);
                yPos += 15;
                
                // Recipient Name
                const fullName = `${beneficiary.first_name || ''} ${beneficiary.middle_name || ''} ${beneficiary.last_name || ''} ${beneficiary.name_ext || ''}`.trim().toUpperCase();
                const title = beneficiary.sex === 'Female' ? 'Ms.' : 'Mr.';
                doc.setFont(undefined, 'bold');
                doc.setFontSize(11);
                doc.text(`${title} ${fullName}`, 20, yPos);
                yPos += 6;
                
                // Address
                doc.setFont(undefined, 'normal');
                doc.setFontSize(10);
                const address = beneficiary.address || '';
                yPos = addText(address, 20, yPos, pageWidth - 40);
                yPos += 8;
                
                // Salutation
                doc.setFont(undefined, 'normal');
                doc.text('Dear ', 20, yPos);
                const dearWidth = doc.getTextWidth('Dear ');
                doc.setFont(undefined, 'bold');
                doc.text(title, 20 + dearWidth, yPos);
                const titleWidth = doc.getTextWidth(title);
                doc.setFont(undefined, 'normal');
                doc.text(' ' + (beneficiary.last_name || '').toUpperCase() + ':', 20 + dearWidth + titleWidth, yPos);
                yPos += 8;
                doc.text('Greetings from CHED Caraga!', 20, yPos);
                yPos += 10;
                
                // Body Paragraph 1
                doc.setFontSize(10);
                let bodyText = 'This is to inform you that as per review of records in this Office, you appeared to have been extended with educational assistance through the Study Now Pay Later Program (SNPLP) in accordance with CHED Memorandum Order (CMO) No. 29, series of 2009 with the following details:';
                yPos = addText(bodyText, 20, yPos, pageWidth - 40, 10, 'justify');
                yPos += 3;
                
                // Specific Details
                doc.setFont(undefined, 'bold');
                const awardNumber = beneficiary.award_number || 'N/A';
                const hei = beneficiary.hei || 'N/A';
                const totalAmortization = beneficiary.disbursement_info?.total_full_amortization || 0;
                const outstandingBalance = Math.max(0, Math.round((totalAmortization - Number(totalAmountPaid)) * 100) / 100);
                const outstandingBalanceWords = this.numberToWords(parseFloat(outstandingBalance));
                
                doc.setFont(undefined, 'normal');
                bodyText = `1. SNPLP grantee Award Number ${awardNumber};`;
                yPos = addText(bodyText, 20, yPos, pageWidth - 40);
                
                bodyText = `2. Previously enrolled at ${hei}; and`;
                yPos = addText(bodyText, 20, yPos, pageWidth - 40);
                
                bodyText = `3. Outstanding balance on principal loan totaled to ${outstandingBalanceWords} (P${this.formatCurrency(outstandingBalance).replace(/\s/g, '')}).`;
                yPos = addText(bodyText, 20, yPos, pageWidth - 40);
                yPos += 3;
                
                // Body Paragraph 2
                bodyText = 'As outlined in Republic Act No. 8545, Section 10(c), any loan granted under this program shall be paid by the student-debtor after completing the course or program, but only after a period of two (2) years from the date of employment. Provided, however, that interest at the rate of not more than six percent (6%) per annum shall accrue on the balance thereof.';
                yPos = addText(bodyText, 20, yPos, pageWidth - 40, 10, 'justify');
                yPos += 3;
                
                bodyText = 'In this regard, we would like to remind you of your financial obligations and you are hereby requested to please start your payment for the aforementioned loan via the Land Bank of the Philippines (LBP) Link.Biz Portal, noting this important information:';
                yPos = addText(bodyText, 20, yPos, pageWidth - 40, 10, 'justify');
                yPos += 3;
                
                
                doc.setFont(undefined, 'normal');
                let merchantNameText = 'Merchant Name: ';
                let merchantNameWidth = doc.getTextWidth(merchantNameText);
                doc.text(merchantNameText, 20, yPos);
                doc.setFont(undefined, 'bold');
                doc.text('COMMISSION ON HIGHER EDUCATION-CARAGA REGION', 20 + merchantNameWidth, yPos);
                doc.setFont(undefined, 'normal');
                yPos += 4;
                
                doc.setFont(undefined, 'normal');
                let transactionTypeText = 'Transaction Type: ';
                let transactionTypeWidth = doc.getTextWidth(transactionTypeText);
                doc.text(transactionTypeText, 20, yPos);
                doc.setFont(undefined, 'bold');
                doc.text(' SNPLP Repayment', 20 + transactionTypeWidth, yPos);
                doc.setFont(undefined, 'normal');
                yPos += 6;
                
                // Documentation
                bodyText = 'For proper recording and updating, please send us a copy of your proof of payment along with the completed Information Form and Notarized Promissory Note (templates attached) via email: eksalingay@ched.gov.ph or personal delivery to CHED Caraga within 15 days upon the receipt of this letter.';
                yPos = addText(bodyText, 20, yPos, pageWidth - 40, 10, 'justify');
                yPos += 3;
                
                // Contact Information
                bodyText = 'For inquiries and concerns, please call (085) 815-3698 or 0912-089-2045/0948-481-5407; email at chedcaragastufaps@ched.gov.ph; message the facebook page Commission on Higher Education Caraga Regional Office; or visit the office at HEDC Building CSU Main Campus, Ampayon, Butuan City.';
                yPos = addText(bodyText, 20, yPos, pageWidth - 40, 10, 'justify');
                yPos += 6;
                
                // Closing
                doc.text('Very truly yours,', 20, yPos);
                yPos += 15;
                
                // Signatory
                doc.setFont(undefined, 'bold');
                doc.text('NELIA A ALIBIN, PhD', 20, yPos);
                yPos += 5;
                doc.setFont(undefined, 'normal');
                doc.text('Director IV', 20, yPos);
                yPos += 20;
                doc.text('Cc: Records/File/ENS', 20, yPos);
                yPos += 10;
                
                // Load and add footer image
                try {
                    const footerUrl = '/img/footer.png';
                    const footerImg = new Image();
                    footerImg.crossOrigin = 'anonymous';
                    
                    await new Promise((resolve, reject) => {
                        footerImg.onload = () => {
                            try {
                                // Calculate footer dimensions to span full width
                                const footerWidth = pageWidth; // Full width
                                const footerHeight = (footerImg.height / footerImg.width) * footerWidth;
                                const footerX = 0; // No margin - full width
                                const footerY = pageHeight - footerHeight - 10; // Position at bottom with 10px margin
                                
                                doc.addImage(footerImg, 'PNG', footerX, footerY, footerWidth, footerHeight);
                                resolve();
                            } catch (error) {
                                console.warn('Could not add footer to PDF:', error);
                                resolve(); // Continue without footer
                            }
                        };
                        footerImg.onerror = () => {
                            console.warn('Could not load footer image');
                            resolve(); // Continue without footer
                        };
                        footerImg.src = footerUrl;
                    });
                } catch (error) {
                    console.warn('Error loading footer image:', error);
                }
                
                // Generate filename
                const filename = `SNPLP_Letter_${beneficiary.award_number || beneficiary.id}_${fullName.replace(/\s+/g, '_')}.pdf`;
                
                // Save PDF
                doc.save(filename);
                
                this.$notify({
                    message: 'PDF generated successfully!',
                    type: 'success',
                });
            } catch (error) {
                console.error('Error generating PDF:', error);
                this.$notify({
                    message: 'Error generating PDF. Please try again.',
                    type: 'error',
                });
            }
        },
        handleDelete(beneficiary) {
            this.selectedBeneficiaryForDelete = beneficiary;
            this.modalVisibleConfirmDelete = true;
        },
        async confirmDeleteBeneficiary() {
            if (!this.selectedBeneficiaryForDelete) return;
            
            const beneficiaryId = this.selectedBeneficiaryForDelete.id;
            this.modalVisibleConfirmDelete = false;
            
            try {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.user.token}`;
                await axios
                    .post('api/data-del/' + beneficiaryId)
                    .then((response) => {
                        this.$notify({
                            message: response.data.message || 'Beneficiary successfully deleted!',
                            type: 'success',
                        });
                        // Refresh the beneficiaries list
                        if (this.dropVal == 1 || this.dropVal == 0) {
                            this.fetchStatus(this.dropVal, this.currentPage);
                        } else {
                            this.getBeneficiaries(this.currentPage);
                        }
                        this.selectedBeneficiaryForDelete = null;
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$notify({
                            message: error.response?.data?.message || 'Something went wrong!',
                            type: 'error',
                        });
                    });
            } catch (error) {
                console.log(error);
                this.$notify({
                    message: 'Error deleting beneficiary. Please try again.',
                    type: 'error',
                });
            }
        }
    }
  }

</script>
<style scoped>

    .button-container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 4px;
        align-items: center;
    }
    
    .button-container .el-button {
        margin: 2px 4px;
        white-space: nowrap;
        flex-shrink: 0;
        min-width: fit-content;
    }
    
    /* Ensure buttons in top toolbar don't get cropped */
    .row.ml-1.mb-1 {
        overflow: visible;
        min-width: 0;
    }
    
    .row.ml-1.mb-1 .el-button,
    .row.ml-1.mb-1 .el-input {
        flex-shrink: 0;
    }
    
    /* Prevent button text from being cut off */
    .el-button--mini {
        padding: 7px 15px;
        min-width: auto;
    }
    
    /* Ensure card body doesn't clip content */
    .card-body {
        overflow-x: visible;
    }
    
    /* Fix for Actions column buttons */
    .el-table .button-container {
        min-width: 100%;
        overflow: visible;
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
