import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAdmin } from "@/contexts/AdminContext";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { LogOut, BarChart3, Users, Settings, Mail } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  const { adminEmail, logout } = useAdmin();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  if (!adminEmail) {
    setLocation("/admin-login");
    return null;
  }

  const stats = [
    { label: "Total Websites", value: "512", icon: "🌐" },
    { label: "Active Clients", value: "284", icon: "👥" },
    { label: "Monthly Revenue", value: "$45,230", icon: "💰" },
    { label: "Conversion Rate", value: "12.5%", icon: "📈" },
  ];

  const recentClients = [
    { id: 1, name: "Tech Startup Inc", plan: "E-Commerce", date: "2 days ago" },
    { id: 2, name: "Local Coffee Shop", plan: "Simple", date: "1 week ago" },
    { id: 3, name: "Fashion Boutique", plan: "E-Commerce", date: "2 weeks ago" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container flex items-center justify-between h-16">
          <div>
            <h1 className="text-2xl font-display font-bold text-accent">Gdevalop Admin</h1>
            <p className="text-xs text-muted-foreground">{adminEmail}</p>
          </div>
          <motion.button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4">
        <div className="container">
          {/* Tabs */}
          <motion.div
            className="flex gap-4 mb-8 border-b border-border pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "clients", label: "Clients", icon: Users },
              { id: "messages", label: "Messages", icon: Mail },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="p-6 border border-border hover:border-accent/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{stat.icon}</div>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">+12%</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                      <p className="text-3xl font-display font-bold text-foreground">{stat.value}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6 border border-border">
                  <h3 className="text-xl font-display font-bold mb-6">Recent Clients</h3>
                  <div className="space-y-4">
                    {recentClients.map((client, idx) => (
                      <motion.div
                        key={client.id}
                        className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border hover:border-accent/50 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <div>
                          <p className="font-medium text-foreground">{client.name}</p>
                          <p className="text-sm text-muted-foreground">{client.plan} Plan</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{client.date}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {/* Clients Tab */}
          {activeTab === "clients" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 border border-border">
                <h3 className="text-xl font-display font-bold mb-6">All Clients</h3>
                <div className="space-y-4">
                  {recentClients.map((client) => (
                    <div key={client.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                      <div>
                        <p className="font-medium">{client.name}</p>
                        <p className="text-sm text-muted-foreground">{client.plan} Plan</p>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}

          {/* Messages Tab */}
          {activeTab === "messages" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 border border-border">
                <h3 className="text-xl font-display font-bold mb-6">Contact Messages</h3>
                <p className="text-muted-foreground">No new messages</p>
              </Card>
            </motion.div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="p-6 border border-border">
                <h3 className="text-xl font-display font-bold mb-4">Admin Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Email</label>
                    <input
                      type="email"
                      value={adminEmail}
                      disabled
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Website Status</label>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Online</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
