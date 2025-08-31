import requests
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get the backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://travel-advisor-hub.preview.emergentagent.com')
API_BASE_URL = f"{BACKEND_URL}/api"

class JetSet101APITester:
    def __init__(self):
        self.base_url = API_BASE_URL
        self.test_results = []
        
    def log_test(self, test_name, success, message, response_data=None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "response_data": response_data
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if response_data:
            print(f"   Response: {json.dumps(response_data, indent=2)}")
        print()
    
    def test_health_check(self):
        """Test GET /api/ - Health check endpoint"""
        try:
            response = requests.get(f"{self.base_url}/")
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "status" in data:
                    self.log_test("Health Check", True, "API is healthy", data)
                    return True
                else:
                    self.log_test("Health Check", False, "Missing required fields in response", data)
                    return False
            else:
                self.log_test("Health Check", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Health Check", False, f"Connection error: {str(e)}")
            return False
    
    def test_membership_creation(self):
        """Test POST /api/memberships - Create membership"""
        test_cases = [
            {
                "name": "Valid Monthly Membership",
                "data": {
                    "email": "member@jetset101.com",
                    "plan": "monthly"
                },
                "should_succeed": True
            },
            {
                "name": "Valid Annual Membership",
                "data": {
                    "email": "annual@jetset101.com", 
                    "plan": "annual"
                },
                "should_succeed": True
            },
            {
                "name": "Duplicate Email",
                "data": {
                    "email": "member@jetset101.com",
                    "plan": "monthly"
                },
                "should_succeed": False
            },
            {
                "name": "Invalid Email Format",
                "data": {
                    "email": "invalid-email",
                    "plan": "monthly"
                },
                "should_succeed": False
            },
            {
                "name": "Invalid Plan",
                "data": {
                    "email": "test@jetset101.com",
                    "plan": "invalid-plan"
                },
                "should_succeed": False
            },
            {
                "name": "Missing Required Fields",
                "data": {
                    "email": "test2@jetset101.com"
                },
                "should_succeed": False
            }
        ]
        
        all_passed = True
        for test_case in test_cases:
            try:
                response = requests.post(
                    f"{self.base_url}/memberships",
                    json=test_case["data"],
                    headers={"Content-Type": "application/json"}
                )
                
                data = response.json()
                
                if test_case["should_succeed"]:
                    if response.status_code == 200 and data.get("success"):
                        self.log_test(f"Membership - {test_case['name']}", True, "Membership created successfully", data)
                    else:
                        self.log_test(f"Membership - {test_case['name']}", False, f"Expected success but got: {data}")
                        all_passed = False
                else:
                    if response.status_code != 200 or not data.get("success"):
                        self.log_test(f"Membership - {test_case['name']}", True, "Correctly rejected invalid data", data)
                    else:
                        self.log_test(f"Membership - {test_case['name']}", False, f"Should have failed but succeeded: {data}")
                        all_passed = False
                        
            except Exception as e:
                self.log_test(f"Membership - {test_case['name']}", False, f"Request error: {str(e)}")
                all_passed = False
        
        return all_passed
    
    def test_advisor_application(self):
        """Test POST /api/advisors/apply - Submit advisor application"""
        test_cases = [
            {
                "name": "Valid Advisor Application",
                "data": {
                    "email": "advisor@jetset101.com"
                },
                "should_succeed": True
            },
            {
                "name": "Duplicate Advisor Application",
                "data": {
                    "email": "advisor@jetset101.com"
                },
                "should_succeed": False
            },
            {
                "name": "Invalid Email Format",
                "data": {
                    "email": "invalid-email"
                },
                "should_succeed": False
            },
            {
                "name": "Missing Email",
                "data": {},
                "should_succeed": False
            }
        ]
        
        all_passed = True
        for test_case in test_cases:
            try:
                response = requests.post(
                    f"{self.base_url}/advisors/apply",
                    json=test_case["data"],
                    headers={"Content-Type": "application/json"}
                )
                
                data = response.json()
                
                if test_case["should_succeed"]:
                    if response.status_code == 200 and data.get("success"):
                        self.log_test(f"Advisor - {test_case['name']}", True, "Application submitted successfully", data)
                    else:
                        self.log_test(f"Advisor - {test_case['name']}", False, f"Expected success but got: {data}")
                        all_passed = False
                else:
                    if response.status_code != 200 or not data.get("success"):
                        self.log_test(f"Advisor - {test_case['name']}", True, "Correctly rejected invalid data", data)
                    else:
                        self.log_test(f"Advisor - {test_case['name']}", False, f"Should have failed but succeeded: {data}")
                        all_passed = False
                        
            except Exception as e:
                self.log_test(f"Advisor - {test_case['name']}", False, f"Request error: {str(e)}")
                all_passed = False
        
        return all_passed
    
    def test_newsletter_subscription(self):
        """Test POST /api/newsletter/subscribe - Subscribe to newsletter"""
        test_cases = [
            {
                "name": "Valid Newsletter Subscription",
                "data": {
                    "email": "newsletter@jetset101.com"
                },
                "should_succeed": True
            },
            {
                "name": "Duplicate Newsletter Subscription",
                "data": {
                    "email": "newsletter@jetset101.com"
                },
                "should_succeed": True  # Should still succeed but with different message
            },
            {
                "name": "Invalid Email Format",
                "data": {
                    "email": "invalid-email"
                },
                "should_succeed": False
            },
            {
                "name": "Missing Email",
                "data": {},
                "should_succeed": False
            }
        ]
        
        all_passed = True
        for test_case in test_cases:
            try:
                response = requests.post(
                    f"{self.base_url}/newsletter/subscribe",
                    json=test_case["data"],
                    headers={"Content-Type": "application/json"}
                )
                
                data = response.json()
                
                if test_case["should_succeed"]:
                    if response.status_code == 200 and data.get("success"):
                        self.log_test(f"Newsletter - {test_case['name']}", True, "Subscription processed successfully", data)
                    else:
                        self.log_test(f"Newsletter - {test_case['name']}", False, f"Expected success but got: {data}")
                        all_passed = False
                else:
                    if response.status_code != 200 or not data.get("success"):
                        self.log_test(f"Newsletter - {test_case['name']}", True, "Correctly rejected invalid data", data)
                    else:
                        self.log_test(f"Newsletter - {test_case['name']}", False, f"Should have failed but succeeded: {data}")
                        all_passed = False
                        
            except Exception as e:
                self.log_test(f"Newsletter - {test_case['name']}", False, f"Request error: {str(e)}")
                all_passed = False
        
        return all_passed
    
    def test_content_stats(self):
        """Test GET /api/content/stats - Get platform statistics"""
        try:
            response = requests.get(f"{self.base_url}/content/stats")
            
            if response.status_code == 200:
                data = response.json()
                if "stats" in data and isinstance(data["stats"], list):
                    # Check if stats have required structure
                    valid_stats = True
                    for stat in data["stats"]:
                        if not ("number" in stat and "label" in stat):
                            valid_stats = False
                            break
                    
                    if valid_stats:
                        self.log_test("Content Stats", True, "Stats retrieved successfully", data)
                        return True
                    else:
                        self.log_test("Content Stats", False, "Invalid stats structure", data)
                        return False
                else:
                    self.log_test("Content Stats", False, "Missing or invalid stats field", data)
                    return False
            else:
                self.log_test("Content Stats", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Content Stats", False, f"Request error: {str(e)}")
            return False
    
    def test_membership_benefits(self):
        """Test GET /api/memberships/benefits - Get membership benefits"""
        try:
            response = requests.get(f"{self.base_url}/memberships/benefits")
            
            if response.status_code == 200:
                data = response.json()
                if "plans" in data and "benefits" in data:
                    # Check if plans have monthly and annual
                    plans = data["plans"]
                    if "monthly" in plans and "annual" in plans:
                        self.log_test("Membership Benefits", True, "Benefits retrieved successfully", data)
                        return True
                    else:
                        self.log_test("Membership Benefits", False, "Missing monthly or annual plans", data)
                        return False
                else:
                    self.log_test("Membership Benefits", False, "Missing plans or benefits", data)
                    return False
            else:
                self.log_test("Membership Benefits", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Membership Benefits", False, f"Request error: {str(e)}")
            return False
    
    def test_advisor_program_details(self):
        """Test GET /api/advisors/program-details - Get advisor program details"""
        try:
            response = requests.get(f"{self.base_url}/advisors/program-details")
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["commission_rate", "benefits", "training_modules"]
                
                if all(field in data for field in required_fields):
                    self.log_test("Advisor Program Details", True, "Program details retrieved successfully", data)
                    return True
                else:
                    missing_fields = [field for field in required_fields if field not in data]
                    self.log_test("Advisor Program Details", False, f"Missing fields: {missing_fields}", data)
                    return False
            else:
                self.log_test("Advisor Program Details", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Advisor Program Details", False, f"Request error: {str(e)}")
            return False
    
    def run_all_tests(self):
        """Run all API tests"""
        print(f"🚀 Starting JetSet 101 API Tests")
        print(f"📍 Testing API at: {self.base_url}")
        print("=" * 60)
        
        # Test all endpoints
        tests = [
            ("Health Check", self.test_health_check),
            ("Membership Creation", self.test_membership_creation),
            ("Advisor Applications", self.test_advisor_application),
            ("Newsletter Subscription", self.test_newsletter_subscription),
            ("Content Stats", self.test_content_stats),
            ("Membership Benefits", self.test_membership_benefits),
            ("Advisor Program Details", self.test_advisor_program_details)
        ]
        
        passed_tests = 0
        total_tests = len(tests)
        
        for test_name, test_func in tests:
            print(f"🧪 Running {test_name} tests...")
            if test_func():
                passed_tests += 1
            print("-" * 40)
        
        # Summary
        print("=" * 60)
        print(f"📊 TEST SUMMARY")
        print(f"✅ Passed: {passed_tests}/{total_tests}")
        print(f"❌ Failed: {total_tests - passed_tests}/{total_tests}")
        
        if passed_tests == total_tests:
            print("🎉 All tests passed! API is working correctly.")
            return True
        else:
            print("⚠️  Some tests failed. Check the details above.")
            return False

if __name__ == "__main__":
    tester = JetSet101APITester()
    success = tester.run_all_tests()
    
    # Print detailed results
    print("\n" + "=" * 60)
    print("📋 DETAILED TEST RESULTS")
    print("=" * 60)
    
    for result in tester.test_results:
        status = "✅" if result["success"] else "❌"
        print(f"{status} {result['test']}: {result['message']}")
    
    exit(0 if success else 1)